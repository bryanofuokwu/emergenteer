import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Map from './Map.js';
import { Marker } from 'react-native-maps';
import { Callout } from 'react-native-maps';
import { Button, Alert } from 'react-native';

import { useNavigation } from 'react-navigation-hooks';

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

      error => { seterror(error.message) },

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
    return (
      <View style={styles.main} >
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Map
         style={styles.map}
         initialRegion={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
         }}>
          <Marker coordinate = {{latitude, longitude }} image = { require("./assets/fire_icon.png") } />
        </Map>
        </View>

      <Button 
            style = { styles.ButtonRight } 
            title = "Report Incident" 
            onPress = {() => navigate('Report')} 

      />
        
      <Button 
           style = { styles.ButtonLeft } 
           title = "Go Back" 
           onPress = {() => navigate('Home')} 
      /> 

      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/robot-dev.png'),
      require('./assets/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/SpaceMono-Regular.ttf'),
    }),
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
    backgroundColor: '#fff',
  },
  main: {
    height: "100%",
    width: "100%"
  },

  ButtonRight: {
    bottom: 0,
    right: 0,
  },

  ButtonLeft: {
    bottom: 0,
    left: 0,
  },
});
