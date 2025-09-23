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


const WEB_CLIENT_ID='664454065013-8ti6mumuoju2ebt2d95856rmul1um3t0.apps.googleusercontent.com'
const ANDROID_CLIENT_ID='664454065013-tt07fetl2k9mlb5bqmfg847iqc6naq4h.apps.googleusercontent.com'

const App=()=> {

 useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '664454065013-fs90fmkvi530053kclc7610v3vbs73pc.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  });

    return (
      <SafeAreaView>
      <View>
      <StatusBar barStyle="dark-content" />
      {/* <Index/> */}
      <Signup/>
      </View>
      </SafeAreaView>
  )
}


export default App;
