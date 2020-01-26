import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Map from "./Map.js";
import { Marker } from "react-native-maps";
import { Callout } from "react-native-maps";
import { Button, Alert } from "react-native";

import { useNavigation } from "react-navigation-hooks";

global.onFire = false;
export const alertFire = () => {
  global.onFire = true;
};
global.onEmerg = false;
export const alertEmerg = () => {
  global.onEmerg = true;
};
global.animal = false;
export const alertAnim = () => {
  global.animal = true;
};
export const alertFireOff = () => {
  global.onFire = false;
};
export const alertEmergOff = () => {
  global.onEmerg = false;
};
export const alertAnimOff = () => {
  global.animal = false;
};
export default function MapScreen(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [error, seterror] = useState(null);
  const { navigate } = useNavigation();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);

        setLongitude(position.coords.longitude);
      },

      error => {
        seterror(error.message);
      },

      { enableHighAccuracy: true, timeout: 200000, maximumAge: 2000 }
    );
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    if (global.onFire == true) {
      return (
        <View style={styles.main}>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <Map
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            >
              <Marker
                coordinate={{ latitude: -36.69, longitude: 144.7 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.2, longitude: 145.345 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.85, longitude: 145.7 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.739, longitude: 147.3 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.69, longitude: 145.98 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.77, longitude: 146.6 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.4, longitude: 146.7 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.017, longitude: 144.99 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.12, longitude: 145.701 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.4, longitude: 146.9 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.05, longitude: 145.24 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36, longitude: 145.24 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.12, longitude: 145.74 }}
                image={require("./assets/animal_map_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.35, longitude: 145.5 }}
                image={require("./assets/animal_map_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.67, longitude: 146.7 }}
                image={require("./assets/animal_map_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.69, longitude: 146.7 }}
                image={require("./assets/animal_map_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.27, longitude: 144.72 }}
                image={require("./assets/alert_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.35, longitude: 146.85 }}
                image={require("./assets/alert_icon.png")}
              />
              <Marker
                coordinate={{ latitude, longitude }}
                image={require("./assets/fire_icon.png")}
              />
            </Map>
          </View>
          <View
            style={{
              borderWidth: 1,
              position: "absolute",
              bottom: 70,
              alignSelf: "flex-start",
              borderRadius: 100,
              backgroundColor: "black",
              marginLeft: 10
            }}
          >
            <Button
              style={styles.submitButton}
              title="Report Incident "
              onPress={() => navigate("Report")}
            />
          </View>

          <View
            style={{
              borderWidth: 1,
              position: "absolute",
              bottom: 70,
              alignSelf: "flex-end",
              borderRadius: 100,
              backgroundColor: "black",
              marginRight: 10,
              right: 1
            }}
          >
            <Button
              style={styles.submitButton}
              title="Go Back"
              onPress={() => navigate("Home")}
            />
          </View>
        </View>
      );
    } else if (global.animal == true) {
      return (
        <View style={styles.main}>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <Map
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            >
              <Marker
                coordinate={{ latitude: -36.69, longitude: 144.7 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.2, longitude: 145.345 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.85, longitude: 145.7 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.739, longitude: 147.3 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.69, longitude: 145.98 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.77, longitude: 146.6 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.4, longitude: 146.7 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.017, longitude: 144.99 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.12, longitude: 145.701 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.4, longitude: 146.9 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.05, longitude: 145.24 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36, longitude: 145.24 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.12, longitude: 145.74 }}
                image={require("./assets/animal_map_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.35, longitude: 145.5 }}
                image={require("./assets/animal_map_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.67, longitude: 146.7 }}
                image={require("./assets/animal_map_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.69, longitude: 146.7 }}
                image={require("./assets/animal_map_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.27, longitude: 144.72 }}
                image={require("./assets/alert_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.35, longitude: 146.85 }}
                image={require("./assets/alert_icon.png")}
              />
              <Marker
                coordinate={{ latitude, longitude }}
                image={require("./assets/animal_map_icon.png")}
              />
            </Map>
          </View>
          <View
            style={{
              borderWidth: 1,
              position: "absolute",
              bottom: 70,
              alignSelf: "flex-start",
              borderRadius: 100,
              backgroundColor: "black",
              marginLeft: 10
            }}
          >
            <Button
              style={styles.submitButton}
              title="Report Incident "
              onPress={() => navigate("Report")}
            />
          </View>

          <View
            style={{
              borderWidth: 1,
              position: "absolute",
              bottom: 70,
              alignSelf: "flex-end",
              borderRadius: 100,
              backgroundColor: "black",
              marginRight: 10,
              right: 1
            }}
          >
            <Button
              style={styles.submitButton}
              title="Go Back"
              onPress={() => navigate("Home")}
            />
          </View>
        </View>
      );
    } else if (global.onEmerg == true) {
      return (
        <View style={styles.main}>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <Map
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            >
              <Marker
                coordinate={{ latitude: -36.69, longitude: 144.7 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.2, longitude: 145.345 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.85, longitude: 145.7 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.739, longitude: 147.3 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.69, longitude: 145.98 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.77, longitude: 146.6 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.4, longitude: 146.7 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.017, longitude: 144.99 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.12, longitude: 145.701 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.4, longitude: 146.9 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.05, longitude: 145.24 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36, longitude: 145.24 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.12, longitude: 145.74 }}
                image={require("./assets/animal_map_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.35, longitude: 145.5 }}
                image={require("./assets/animal_map_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.67, longitude: 146.7 }}
                image={require("./assets/animal_map_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.69, longitude: 146.7 }}
                image={require("./assets/animal_map_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.27, longitude: 144.72 }}
                image={require("./assets/alert_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.35, longitude: 146.85 }}
                image={require("./assets/alert_icon.png")}
              />
              <Marker
                coordinate={{ latitude, longitude }}
                image={require("./assets/alert_icon.png")}
              />
            </Map>
          </View>
          <View
            style={{
              borderWidth: 1,
              position: "absolute",
              bottom: 70,
              alignSelf: "flex-start",
              borderRadius: 100,
              backgroundColor: "black",
              marginLeft: 10
            }}
          >
            <Button
              style={styles.submitButton}
              title="Report Incident "
              onPress={() => navigate("Report")}
            />
          </View>

          <View
            style={{
              borderWidth: 1,
              position: "absolute",
              bottom: 70,
              alignSelf: "flex-start",
              borderRadius: 100,
              backgroundColor: "black",
              marginRight: 10,
              right: 1
            }}
          >
            <Button
              style={styles.submitButton}
              title="Go Back"
              onPress={() => navigate("Home")}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.main}>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <Map
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            >
              <Marker
                coordinate={{ latitude: -36.69, longitude: 144.7 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.2, longitude: 145.345 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.85, longitude: 145.7 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.739, longitude: 147.3 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.69, longitude: 145.98 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.77, longitude: 146.6 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.4, longitude: 146.7 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.017, longitude: 144.99 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.12, longitude: 145.701 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.4, longitude: 146.9 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.05, longitude: 145.24 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36, longitude: 145.24 }}
                image={require("./assets/fire_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.12, longitude: 145.74 }}
                image={require("./assets/animal_map_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.35, longitude: 145.5 }}
                image={require("./assets/animal_map_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -35.67, longitude: 146.7 }}
                image={require("./assets/animal_map_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.69, longitude: 146.7 }}
                image={require("./assets/animal_map_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -37.27, longitude: 144.72 }}
                image={require("./assets/alert_icon.png")}
              />
              <Marker
                coordinate={{ latitude: -36.35, longitude: 146.85 }}
                image={require("./assets/alert_icon.png")}
              />
              <Marker
                coordinate={{ latitude, longitude }}
                title="title"
                //image = {require("./assets/animal_icon.png")}
              />
            </Map>
          </View>

          <View
            style={{
              borderWidth: 1,
              position: "absolute",
              bottom: 70,
              alignSelf: "flex-end",
              borderRadius: 100,
              backgroundColor: "black",
              marginRight: 10,
              right: 1
            }}
          >
            <Button
              style={styles.submitButton}
              title="Go Back"
              onPress={() => navigate("Home")}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              position: "absolute",
              bottom: 70,
              alignSelf: "flex-start",
              borderRadius: 100,
              backgroundColor: "black",
              marginLeft: 10
            }}
          >
            <Button
              style={styles.submitButton}
              title="Report Incident"
              onPress={() => navigate("Report")}
            />
          </View>
        </View>
      );
    }
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/robot-dev.png"),
      require("./assets/robot-prod.png")
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "space-mono": require("./assets/SpaceMono-Regular.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  main: {
    height: "100%",
    width: "100%"
  },

  ButtonRight: {
    bottom: 0,
    right: 0
  },

  ButtonLeft: {
    bottom: 0,
    left: 0
  },
  submitButton: {
    position: "absolute",
    bottom: 0,
    left: 0
  }
});
