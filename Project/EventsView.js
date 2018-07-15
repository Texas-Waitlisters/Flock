import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class EventsView extends Component {
	static propTypes = {}
	constructor() {
		super();
		this.state = { 
			events: [
				{
					name: "Event1",
					time: "00:00"
				},
				{
					name: "Event2",
					time: "00:00"
				},{
					name: "Event3",
					time: "00:00"
				}
			]
		}
	}

	render () {
	  	allEvents =  this.state.events.map(event => {
			return(
				<View style={styles.listItem}>
					<Text adjustFontSizeToFit={true} style={styles.eventName}>{event.name}</Text>
					<Text adjustFontSizeToFit={true} style={styles.eventTime}>{event.time}</Text>
				</View>	
			);
		});
		return (
		    allEvents
		)
	}


	}
export default EventsView;



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
		eventTime: {
			fontSize: 20,
			textAlign: 'right', 
			alignSelf: 'stretch',
		},
		
	});