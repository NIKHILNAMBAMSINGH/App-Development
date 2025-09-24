import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { style } from './style';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


const GoogleLogin = () => {

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      console.log('User Info:', user);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign-in in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available or outdated');
      } else {
        console.error('Some other error happened:', error);
      }
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.1}
      style={style.container}
      onPress={handleGoogleLogin} 
    >
      <Image
        style={style.image}
        source={require('../../assets/google.png')}
      />
    </TouchableOpacity>
  );
};


export default GoogleLogin;