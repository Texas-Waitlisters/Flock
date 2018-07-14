import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

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
			onSubmitEditing={() => this.setState({text: ''})}/>
		</View>
		<Text adjustFontSizeToFit={true} style={[styles.titleText, {flex: 5, backgroundColor: 'powderblue', padding: 5}]}>Flock</Text>
		<View style={{flex: 68, backgroundColor: 'white'}}/>`
		<View style={{flex: 10, backgroundColor: 'powderblue', flexDirection: 'row'}}>
			<View style={{flex: 1, backgroundColor: this.state.tab == 'map' ? 'lightcyan' : 'powderblue'}}>
				<TouchableOpacity style={{flex: 1}}
					onPress={() => this.setState({tab: 'map'})}
				/>
			</View>
			<View style={{flex: 1, backgroundColor: this.state.tab == 'events' ? 'lightcyan' : 'powderblue'}}>
				<TouchableOpacity style={{flex: 1}}
					onPress={() => this.setState({tab: 'events'})}
				/>
			</View>
			<View style={{flex: 1, backgroundColor: this.state.tab == 'user' ? 'lightcyan' : 'powderblue'}}>
				<TouchableOpacity style={{flex: 1}}
					onPress={() => this.setState({tab: 'user'})}
				/>
			</View>
			<View style={{flex: 1, backgroundColor: this.state.tab == 'reservation' ? 'lightcyan' : 'powderblue'}}>
				<TouchableOpacity style={{flex: 1}}y
					onPress={() => this.setState({tab: 'reservation'})}
				/>
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
