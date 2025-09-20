import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { style } from './style'


const AuthHeader = ({title}:{title:string}) => {

  return (
     <View style={style.container}>
        <Pressable hitSlop={20}>
            <Image style={style.image} source=                {require('../../assets/auth_back.png')}></Image>
        </Pressable>
         <Text style={style.title}>{title}</Text>
     </View>
  )
}

export default AuthHeader