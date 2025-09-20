import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { style } from './style';
import Button from '../../../components/Button/Button';

const Index = () => {
  return (
    <View style={style.container}>
        
        <Image resizeMode='contain' style={style.image}source={require('../../../assets/splash_image.png')}></Image>
        <View style={style.titleContainer}>
    <Text style={style.title}>You'll find </Text>
    <Text style={[style.title,style.innerTitle]} >All you need</Text>
    <Text style={style.title}>Here!</Text>
    </View>


    <Button title="Sign up"/>
    <Pressable onPress={() => console.log("Sign In Pressed")}>
        <Text style={style.footerText}>Sign In</Text>
    </Pressable>

    </View>
  );
};
export default Index