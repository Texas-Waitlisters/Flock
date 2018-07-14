#!/usr/bin/python

import MySQLdb

def searchByText(text):
    #expedia's nlp
    print("hello")

def searchByCoordinates(lat, lon):
    #find location by coordinates 
    print("hello")

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
    db.commit()

def requestRental(acct_id, loc_id, sql, db):
    people = len(getRentalsAtLocation(loc_id, sql))
    sql.execute("select price from locations where loc_id = %s " %(loc_id))
    p = sql.fetchone()
    price = p[0]
    newCost = price/(people + 1)
    sql.execute("insert into rentals values (%s, %s, %s,  0, )" %(loc_id, acct_id, newCost)
    db.commit()

def main():
    db = MySQLdb.connect(host="localhost",    # your host, usually localhost
                        user="root",         # your username
                        passwd="",  # your password
                        db="flock")        # name of the data base
    sql = db.cursor()
    db.close()

main()

