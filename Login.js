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
            source={require("./logo.png")}
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
          <Button //style={styles.btn}
          //<TouchableOpacity style={styles.btn}>
            //<Text>Login</Text>
            title="Login"
            onPress={() => navigate('MapPage')}
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
export default MyScreen;