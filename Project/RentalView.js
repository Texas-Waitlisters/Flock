import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class RentalView extends Component {
	static propTypes = {}
	constructor() {
		super();
		this.state = { 
			corenters: [
				{
					name: "Alex Bellon",
					score: "5.0"
				},
				{
					name: "Santiago Moreno",
					score: "4.7"
				},{
					name: "Aafia Ahmed",
					score: "0.3"
				}
			],
			requests: [
				{
					name: "Nathan Huckleberry",
					score: "4.4"
				}
			]
		}
	}

	render () {
		title1 = <Text style = {[styles.eventName, {fontSize: 40, color: 'grey'}]}>Confirmed Renters</Text>
	  	corenters =  this.state.corenters.map(x => {
			return(
				<View style={styles.listItem}>
					<Text adjustFontSizeToFit={true} style={styles.eventName}>{x.name}</Text>
					<View styles={styles.scoreCircle}>
						<Text adjustFontSizeToFit={true} style={styles.eventTime}>{x.score}</Text>
					</View>
				</View>	
			);
		});
		title2 = <Text style = {[styles.eventName, {fontSize: 40, color: 'grey'}]}>Requesting Renters</Text>
		requests = this.state.requests.map(x => {
			return(
				<View style={styles.listItem}>
					<Text adjustFontSizeToFit={true} style={styles.eventName}>{x.name}</Text>
					<View styles={styles.scoreCircle}>
						<Text adjustFontSizeToFit={true} style={styles.eventTime}>{x.score}</Text>
					</View>
				</View>
			);
		});
		return (
		    [title1, corenters, title2, requests]
		)
	}


	}
export default RentalView;



const styles = StyleSheet.create({
		listItem: {
			borderBottomWidth :1,
			borderBottomColor: '#aaa',
			flexDirection: "row",
			justifyContent : 'space-between',
			padding: 10,
		}, 
		eventName: {
			fontSize: 25,
			fontWeight: 'bold',
			textAlign:'left',
		},
		scoreCircle: {
			height: 20,
			width: 20,
			backgroundColor: 'pink',
			borderRadius: 20,
			textAlign: 'right', 
		},
		
	});
