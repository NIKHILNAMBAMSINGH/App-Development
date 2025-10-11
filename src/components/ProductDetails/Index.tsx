import React from 'react'
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style';'./style'


const ProductDetails = ({ navigation, route }) => {
  const {product} = route?.params || {};
  console.log("product",product?.description)

 return (
  <SafeAreaView>
 <ScrollView>
  <Image style={style.image} source={{uri:product?.image}}></Image>
  <View style={style.content}>
     <Text style={style.title}>{product?.title}</Text>
     <Text style={style.price}>{product?.price}</Text>
     <Text style={style.description}>{product?.description}</Text>
  </View>

    </ScrollView>
  </SafeAreaView>
  
  );
};

export default ProductDetails;