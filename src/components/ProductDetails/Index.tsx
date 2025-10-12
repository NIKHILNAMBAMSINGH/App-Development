import React from 'react'
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';import Button from '../Button/Button';
'./style'


const ProductDetails = ({ navigation, route }) => {
  const {product} = route?.params || {};
  console.log("product",product?.description)

  const onBackPress=()=>{
navigation.goBack()
  }

 return (
  <SafeAreaView style={style.safe}>
 <ScrollView>
  <Image style={style.image} source={{uri:product?.image}}></Image>
  <View style={style.content}>
     <Text style={style.title}>{product?.title}</Text>
     <Text style={style.price}>{product?.price}</Text>
     <Text style={style.description}>{product?.description}</Text>
  </View>
  <Pressable onPress={onBackPress} style={style.backContainer}>
        <Image style={style.backIcon}source={require('../../assets/back.png')}></Image>
    </Pressable>
    </ScrollView>
  <View style={style.footer}>
    <Pressable  style={style.bookmarkContainer}>
        <Image style={style.bookmarkIcon}source={require('../../assets/bookmark_blue.png')}></Image>
    </Pressable>
     <Button title='Contact Seller'></Button>
  </View>
  </SafeAreaView>
  
  );
};

export default ProductDetails;