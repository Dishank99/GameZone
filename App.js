import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/home.js';

import { AppLoading } from 'expo';

import * as Font from 'expo-font';

import Navigator from './routes/drawer.js';
// import Navigator from './routes/homeStack.js';
// import Navigator from './routes/aboutStack.js';

const getFonts = () => Font.loadAsync({
  // 'Oswald-Medium': require('./assets/fonts/Oswald-Medium.ttf'),
  // 'Ubuntu-Medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
  'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
})
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
    />
  }

  return (
    // <Home />
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
