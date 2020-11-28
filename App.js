/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TabScreen from './src/screens/TabScreen'

const App= () => {
  return (
    <>
    <TabScreen/>
    </>
  );
};

const styles = StyleSheet.create({
 container :{
   flex:1,
   justifyContent:"center",
   alignItems:"center",
   backgroundColor:"#6434eb"
 },
 
});

export default App;
