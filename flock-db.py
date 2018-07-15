#!/usr/bin/python

import MySQLdb, subprocess
from flask import Flask
app = Flask(__name__)

def searchByText(text):
    #expedia's nlp
    print("not working")

def searchByCoordinates(lat, lon, radius):
    response = subprocess.check_output("curl -X GET --header 'Accept: application/json' --header 'key: 97207D3A-35EA-4685-947B-E92E0AE3EEAC' 'https://apim.expedia.com/x/geo/features?within=%dmi&lat=%d&lng=%d'" % (radius, lat, lon), shell=True)
    return response

def getUserData(user, sql): 
    sql.execute("select * from accounts where username = '%s'" % (user))
    row = sql.fetchone()
    acc = row[0]
    sql.execute("SELECT CONCAT( '', GROUP_CONCAT(JSON_OBJECT('acct_id', acct_id , 'rating', rating, 'count', count)), '' ) from users where acct_id = %s " % (acc))
    data = sql.fetchone()
    return data[0]

def login(username, password, sql):
    sql.execute("select * from accounts where username = '%s' and password = '%s'" % (username, password))
    row = sql.fetchone()
    if sql.rowcount == 0:
        return False
    else:
        return True

def getRentalsAtLocation(loc_id, sql):
    sql.execute("SELECT GROUP_CONCAT(JSON_OBJECT('loc_id', loc_id, 'acct_id', acct_id, 'bill', bill, 'approved', approved, 'rental_id', rental_id)) from rentals where loc_id = %s " % (loc_id))
    data = sql.fetchall()
    return data

def approveRental(rental_id, sql, db): 
    sql.execute("update rentals set approved = true where rental_id = %d " % (rental_id))
    sql.execute("select loc_id from rentals where rental_id = %d" % (rental_id))
    l = sql.fetchone()
    loc = l[0] 
    sql.execute("select bill from rentals where loc_id = %d and rental_id <> %d" % (loc, rental_id))
    b = sql.fetchone()
    bill = b[0]
    sql.execute("select price from locations where loc_id = %d" % (loc))
    p = sql.fetchone()
    price = p[0]
    newPeople = price/bill + 1
    newPrice = price/newPeople
    sql.execute("select acct_id from rentals where loc_id = %d " %(loc))
    renters = sql.fetchall()
    for r in renters:
        person = r[0]
        sql.execute("update rentals set bill = %d where acct_id = %d" %(newPrice, person))
    db.commit()

def requestRental(acct_id, loc_id, sql, db):
    people = len(getRentalsAtLocation(loc_id, sql))
    sql.execute("select price from locations where loc_id = %s " %(loc_id))
    p = sql.fetchone()
    price = p[0]
    newCost = price/(people + 1)
    sql.execute("insert into rentals values (%s, %s, %s,  0, )" %(loc_id, acct_id, newCost))
    db.commit()

def main():
    db = MySQLdb.connect(host="localhost",    # your host, usually localhost
                        user="root",         # your username
                        passwd="",  # your password
                        db="flock")        # name of the data base
    sql = db.cursor()

main()

@app.route('/getUserData')
def getUserDataReq():
    user = request.args.get('user')
    getUserData(user, sql)

@app.route('/getRentalsAtLocation')
def getRentalsAtLocationReq():
    loc_id = request.args.get('loc_id')
    getRentalsAtLocation(loc_id, sql)

@app.route('/approveRental')
def approveRentalReq():
    rental_id = request.args.get('rental_id')
    approveRental(rental_id, sql, db)

@app.route('/requestRental')
def requestRentalReq():
    acct_id = request.args.get('acct_id')
    loc_id = request.args.get('loc_id')
    requestRental(acct_id, loc_id)

#db.close()
