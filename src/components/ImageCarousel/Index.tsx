import React, { useState } from 'react'
import { Dimensions, FlatList, Image, View } from 'react-native'
import { style } from './style'

const {width}=Dimensions.get('window');
const ImageCarousel = ({images}) => {
    const [activeIndex,setActiveIndex]=useState(0);

    const handleScrollEnd=(e)=>{
      const horizontalOffset=e.nativeEvent.contentOffset.x;
      const index=Math.round(horizontalOffset/width);
      setActiveIndex(index)
    }
    const renderImages=({item})=>{
        return (
            <Image style={style.image}source={{uri:item}}/>
        )
    }
  return (
    <View>
<FlatList  horizontal style={style.list}data={images} renderItem={renderImages} onMomentumScrollEnd={handleScrollEnd}/>
<View style={style.pagination}>
 {images?.map((_, i) => (
                    <View key={i} style={[style.paginationLine, i === activeIndex ? style.activeLine : {}]} />
                ))}
</View>
    </View>
  )
}

export default ImageCarousel