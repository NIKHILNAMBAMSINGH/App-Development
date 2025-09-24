/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import Splash from './src/screens/auth/Splash/Index';
import Index from './src/screens/auth/Splash/Index';
import Signup from './src/screens/auth/Signup/Index';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import SignIn from './src/screens/auth/SignIn/Index';



const App=()=> {

 useEffect(() => {
    GoogleSignin.configure({
     webClientId: '664454065013-fs90fmkvi530053kclc7610v3vbs73pc.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  });

    return (
      <SafeAreaView>
      <View>
      <StatusBar barStyle="dark-content" />
      {/* <Index/> */}
      {/* <Signup/> */}
      <SignIn/>
      </View>
      </SafeAreaView>
  )
}


export default App;
