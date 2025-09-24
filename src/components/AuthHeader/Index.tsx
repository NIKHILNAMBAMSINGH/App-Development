import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { style } from './style'


const AuthHeader = ({title,onBackPress}:{title:string,onBackPress?:()=>void}) => {

  return (
     <View style={style.container}>
        <Pressable hitSlop={20} onPress={onBackPress}>
            <Image style={style.image} source={require('../../assets/auth_back.png')}></Image>
        </Pressable>
         <Text style={style.title}>{title}</Text>
     </View>
  )
}

export default AuthHeader