import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { style } from './style'


const FavoriteItem = ({ title,price, image,icon, onPress}: { title?:any,price?:any, image?: any,icon?:any, onPress?:any}) => {
  
  return (
    <Pressable onPress={onPress} style={style.container}>
          <Image style={style.image}source={{uri:image}}></Image>
          <View style={style.content}>
                  <Text style={style.title}>{title}</Text>
                  <Text style={style.price}>{price}</Text>
          </View>
            <Image style={style.closeIcon}source={icon||require('../../assets/close.png')}></Image>
            
    </Pressable>

  )
}

export default FavoriteItem;