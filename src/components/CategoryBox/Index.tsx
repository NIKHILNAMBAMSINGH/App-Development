import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { style } from './style'
import { colors } from '../../utils/Color'


const CategoryBox = ({ title,isFirst,isSelected, image, onPress}: { title?:any,isFirst:any,isSelected?:any, image?: any, onPress?:any}) => {
  return (
    <Pressable onPress={onPress} style={[style.container, isFirst ? { marginLeft: 24 } : {}]}>
      <View style={[style.imageContainer,isSelected?{backgroundColor:colors.blue}:{}]}>
<Image style={style.image}source={{uri:image}}></Image>
      </View>
        <Text style={[style.title,isSelected?{color:colors.blue,fontWeight:'500'}:{}]}>{title}</Text>
    </Pressable>

  )
}

export default CategoryBox;