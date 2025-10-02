import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { style } from './style'


const CategoryBox = ({ title,price,isFirst, image, onPress}: { title?:any,price?:any,isFirst:any, image?: any, onPress?:any}) => {
  return (
    <Pressable onPress={onPress} style={[style.container, isFirst ? { marginLeft: 24 } : {}]}>
      <View style={style.imageContainer}>
<Image style={style.image}source={{uri:image}}></Image>
      </View>
        <Text style={style.price}>{title}</Text>
    </Pressable>

  )
}

export default CategoryBox;