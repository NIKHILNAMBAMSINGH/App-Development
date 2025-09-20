/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Splash from './src/screens/auth/Splash/Index';
import Index from './src/screens/auth/Splash/Index';


function App() {
    return (
      <SafeAreaView>
      <View>
      <StatusBar barStyle="dark-content" />
      <Index/>
      </View>
      </SafeAreaView>
  )
}


export default App;
