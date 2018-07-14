import React, { Component } from 'react';
import { Text, View } from 'react-native';

class UserView extends Component {
  static propTypes = {}

  render = () => {
     return (
	    <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', padding: 25}}>
			<Text style={{fontWeight: 'bold', fontSize: 40, color: 'grey'}}>Name</Text>
			<View style={{backgroundColor: 'pink', borderRadius: 150, height: 150, width: 150, alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{fontWeight: 'bold', fontSize: 70, color: 'white'}} 
				>5.4</Text>
			</View>
			<Text style={{fontWeight: 'bold', fontSize: 25, color: 'grey'}}>Reputation Points</Text>
		</View>
	 )
  }
}
export default UserView;
