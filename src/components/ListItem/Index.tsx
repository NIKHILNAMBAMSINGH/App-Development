import { View, Text, TextInput, Pressable, Image } from "react-native";
import { useState } from "react";
import React from 'react'
import { style } from "./style";

const ListItem = ({title,subtitle,onPress,styles}:{title:any;subtitle?:any,onPress?:any,styles?:any}) => {
  return (
    <Pressable onPress={onPress} style={[style.container,styles]}>
      <View style={style.content}>
        <Text style={style.title}>{title}</Text>
       {subtitle? (
                    <Text style={style.subtitle}>{subtitle}</Text>
                ) : null}
      </View>
      <Image style={style.arrow}source={require('../../assets/right-arrow.png')}/>
    </Pressable>
  )
}
export default ListItem;