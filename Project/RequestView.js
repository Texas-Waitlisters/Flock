import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class RequestView extends Component {
  static propTypes = {}
  constructor(props) {
	  super(props)
	  this.state = {address: "3001 Cedar Street"}
  }

  render = () => {
     return (
	    <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', padding: 25}}>
			<Text style={{fontWeight: 'bold', fontSize: 40, color: 'grey'}}>{this.state.address}</Text>
			<Text style={{fontWeight: 'bold', fontSize: 25, color: 'grey'}}>$89/night</Text>
			<TouchableOpacity
				onPress={this.props.click}>
				<View style={{width: 300, height: 50, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
					<Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>Request rental</Text>
				</View>
			</TouchableOpacity>
		</View>
	 )
  }
}
export default RequestView;
