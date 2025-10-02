import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { style } from './style'


const ProductHomeItem = ({ title,price, image, onPress}: { title?:any,price?:any, image?: any, onPress?:any}) => {
  return (
    <Pressable onPress={onPress} style={style.container}>
          <Image style={style.image}source={{uri:image}}></Image>
                  <Text style={style.price}>{title}</Text>
                  <Text style={style.price}>{price}</Text>
    </Pressable>

  )
}

export default ProductHomeItem;