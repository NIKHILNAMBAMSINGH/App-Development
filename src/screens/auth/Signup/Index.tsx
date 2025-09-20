import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import AuthHeader from '../../../components/AuthHeader/Index';
import { style } from './style';

const Signup = () => {
  return (
    <View style={style.container}>
     <AuthHeader title={'Sign Up'}/>

    </View>
  );
};
export default Signup