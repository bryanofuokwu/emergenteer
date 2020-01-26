
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
//import MapScreen from './Map.js';
import MapScreen from './MapPage.js';

const MainNavigator = createStackNavigator({
	Home: { screen: MyScreen },
    Map1: { screen: MapScreen },
    Report: { screen: Emergency },
    Map2: { screen: MapScreen },
    ReportNew: { screen: Emergency },
    //MapPage: { screen: MapPage },
});
const App = createAppContainer(MainNavigator);
export default App; 