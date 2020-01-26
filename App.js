<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import React, { Component } from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
//import { Button } from "./Button";
import MyScreen from'./Login.js';
import Emergency from'./EmergencyButton.js';
import MapScreen from './MapPage.js';

const MainNavigator = createStackNavigator({
	Home: { screen: MyScreen },
    Report: { screen: Emergency },
    Map: { screen: MapScreen },
});
const App = createAppContainer(MainNavigator);

=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
import { Button } from "./Button";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.logo}>
          <Image
            source={require("./assets/logo.png")}
            style={{ width: 250, height: 250 }}
          />
        </View>
        <View style={styles.container}>
          <TextInput style={styles.input} placeholder="Username" type="email" />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry
          />
          <TouchableOpacity style={styles.btn}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default class Emergency_Type extends Component {
  // for type of emergency
  render() {
    return <Text> Please select your emergency </Text>;
    <view style={styles.container}>
      <Button />
    </view>;
  }
}
const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",
    backgroundColor: "darkred"
  },
  logo: {
    backgroundColor: "darkred",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "45%"
  },
  container: {
    flex: 1,
    backgroundColor: "darkred",
    alignItems: "center",
    marginTop: 10
  },

  input: {
    height: 40,
    width: "90%",
    borderRadius: 20,
    borderColor: "black",
    backgroundColor: "indianred",
    borderWidth: 3,
    padding: 10,
    margin: 10
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: "deepskyblue",
    textAlign: "center",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  }
});
const App = createAppContainer(MainNavigator);

>>>>>>> Stashed changes
export default App;