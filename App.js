import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}
*/
export default class Login extends Component {

	render() {
		return (
				<View style={styles.container}>
					<Text>
						Login
					</Text>
					<TextInput placeholder='Username:' />
					<TextInput placeholder='Password:' />
					<View style={{margin:7}} />
					<Button
							onPress={this.props.onLoginPress}
							title="Submit"
							/>

				</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

