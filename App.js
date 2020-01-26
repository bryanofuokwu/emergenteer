import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
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
import MyScreen from "./Login.js";
import Emergency from "./EmergencyButton.js";
import MapScreen from "./MapPage.js";

const MainNavigator = createStackNavigator({
  Home: { screen: MyScreen },
  Report: { screen: Emergency },
  Map: { screen: MapScreen }
});
const App = createAppContainer(MainNavigator);

export default App;
