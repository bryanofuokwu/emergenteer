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
import { Button2 } from "./Button";

export default class Emergency extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.main}>
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            marginTop: 80,
            fontSize: 40,
            textAlign: "center"
          }}
        >
          {" "}
          Emergency Type
        </Text>
        <View style={styles.logo1}>
          <Image
            source={require("./assets/alert_icon.png")}
            style={{ width: 75, height: 75 }}
          />
          <Button style={styles.Button} title="Emergency" />
        </View>
        <View style={styles.logo2}>
          <Image
            source={require("./assets/fire_icon.png")}
            style={{ width: 75, height: 75 }}
          />
          <Button style={styles.Button} title="Fire" />
        </View>
        <View style={styles.logo3}>
          <Image
            source={require("./assets/animal_icon.png")}
            style={{ width: 75, height: 75 }}
          />
          <Button style={styles.Button} title="Animal" />
        </View>
        <View
          style={{
            borderWidth: 1,
            position: "absolute",
            bottom: 70,
            alignSelf: "center",
            borderRadius: 100,
            backgroundColor: "black"
          }}
        >
          <Button
            style={styles.submitButton}
            title="Go Back"
            onPress={() => navigate("Map")}
          />
        </View>

        {/* <View style={styles.container}>
          <TextInput style={styles.input} placeholder="Username" type="email" />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry
          />
          <TouchableOpacity style={styles.btn}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    paddingTop: 30
  },
  logo1: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    top: 100
  },
  logo2: {
    alignItems: "center",
    justifyContent: "center",
    right: 90,
    top: 90,
    height: 100
  },
  logo3: {
    alignItems: "center",
    justifyContent: "center",
    left: 90,
    top: 0
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
    backgroundColor: "black",
    borderWidth: 3,
    padding: 10,
    margin: 10
  },
  btn: {
    width: 100,
    height: 25,
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },

  emergency_header: {
    backgroundColor: "#00aeef",
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },

  ButtonRight: {
    bottom: 0,
    right: 0
  },

  ButtonLeft: {
    bottom: 0,
    right: 0
  },
  submitButton: {
    position: "absolute",
    bottom: 0,
    left: 0
  }
});
