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

class MyScreen extends Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.main}>
        <View style={styles.logo}>
          <Image
            source={require("./assets/logo.png")}
            style={{ width: 250, height: 250 }}
          />
        </View>
        <View style={styles.container}>
          <TextInput style={styles.input} placeholder="Enter Username" type="email" />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry
          />
          <Button //style={styles.btn}
          //<TouchableOpacity style={styles.btn}>
            //<Text>Login</Text>
            title="Login"
            color="skyblue"

            onPress={() => navigate('Map')}
          // </TouchableOpacity>
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",
    backgroundColor: "black"
  },
  logo: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "45%"
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    marginTop: 10
  },

  input: {
    height: 40,
    width: "90%",
    borderRadius: 20,
    borderColor: "black",
    backgroundColor: "white",
    borderWidth: 2,
    padding: 10,
    margin: 10
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: "powderblue",
    textAlign: "center",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  }
});
export default MyScreen;