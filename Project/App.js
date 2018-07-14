import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { MapView } from 'expo';
import UserView from './UserView';

export default class App extends React.Component {
  constructor(props) {
	super(props);
	this.state = {text: '', tab: 'events'};
  }
	
  render() {
    return (
      <View style={styles.container}>
	    <View style={{flex: 2, backgroundColor: 'powderblue'}}/>
	  	<View style={{flex: 5, backgroundColor: 'powderblue', padding: 15, paddingBottom: 1}}>
			<TextInput style={{flex: 1, borderColor: 'white', borderRadius: 12, backgroundColor: 'white', paddingHorizontal: 15, borderWidth: 1}}
			onChangeText={(text) => this.setState({text: text})}
			value={this.state.text}
			placeholder='Search'
			placeholderTextColor='grey'
			underlineColorAndroid='rgba(0,0,0,0)'
			onSubmitEditing={() => this.setState({text: ''})}/>
		</View>
		<Text adjustFontSizeToFit={true} style={[styles.titleText, {flex: 5, backgroundColor: 'powderblue', padding: 5, color: 'grey'}]}>Flock</Text>
		<View style={{flex: 68, backgroundColor: 'white', borderColor: 'white', borderTopWidth: 3, borderBottomWidth: 3}}>i
		{ this.state.tab == 'map' &&
			<MapView style={{ flex: 1, }}
			initialRegion={{
			  latitude: 37.78825,
			  longitude: -122.4324,
			  latitudeDelta: 0.0922,
			  longitudeDelta: 0.0421}}/>
		}
	    { this.state.tab == 'user' &&
			<UserView/>
		}
		</View>
		<View style={{flex: 10, backgroundColor: 'powderblue', flexDirection: 'row'}}>
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: this.state.tab == 'map' ? 'lightcyan' : 'powderblue'}}>
				<TouchableOpacity style={{flex: 1}}
					onPress={() => this.setState({tab: 'map'})}
				>
					<Image source={require('./icons/map.png')} resizeMode='contain' style={{flex: 1}} pointerEvents={"none"}/>
				</TouchableOpacity>
			</View>
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: this.state.tab == 'events' ? 'lightcyan' : 'powderblue'}}>
				<TouchableOpacity style={{flex: 1}}
					onPress={() => this.setState({tab: 'events'})}
				>
					<Image source={require('./icons/events.png')} resizeMode='contain' style={{flex: 1}} pointerEvents={"none"}/>
				</TouchableOpacity>
			</View>
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: this.state.tab == 'user' ? 'lightcyan' : 'powderblue'}}>
				<TouchableOpacity style={{flex: 1}}
					onPress={() => this.setState({tab: 'user'})}
				>
					<Image source={require('./icons/user.png')} resizeMode='contain' style={{flex: 1}} pointerEvents={"none"}/>
				</TouchableOpacity>
			</View>
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: this.state.tab == 'reservation' ? 'lightcyan' : 'powderblue'}}>
				<TouchableOpacity style={{flex: 1}}y
					onPress={() => this.setState({tab: 'reservation'})}
				>
					<Image source={require('./icons/reservations.png')} resizeMode='contain' style={{flex: 1}} pointerEvents={"none"}/>
				</TouchableOpacity>
			</View>
		</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  border: {
    borderRadius: 4,
	borderWidth: 0.5,
	borderColor: '#d6d7da',
  },
  titleText: {
    textAlign: 'center',
	textAlignVertical: 'center',
	fontSize: 30,
	fontWeight: 'bold',
  }
});
