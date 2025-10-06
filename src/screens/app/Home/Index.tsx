import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "./style";
import Header from "../../../components/Header/Index";
import { categories } from "../../../data/categories";
import CategoryBox from "../../../components/CategoryBox/Index";
import { products } from "../../../data/products";
import ProductHomeItem from "../../../components/ProductHomeItem/Index";
import { useEffect, useState } from "react";

const HomeScreen=()=>{

  const [selectedCategory,setSelectedCategory]=useState();
  const [filteredProducts,setFilteredProducts]=useState(products);
  
  useEffect(()=>{
    if(selectedCategory){
      const updatedFilteredProduct=products.filter((product)=>product?.id===selectedCategory);
      console.log(updatedFilteredProduct)
    setFilteredProducts(updatedFilteredProduct);
    }else{
       setFilteredProducts(products);
    }
  },[selectedCategory])
  
  const renderCategoryItem=({item,index}:{item:any;index:any})=>{
        return (
          <CategoryBox 
          onPress={()=>setSelectedCategory(item?.id)}
          isSelected={item?.id===selectedCategory}
          isFirst={index===0}{...item}>
          </CategoryBox>
        )
  }

 const renderProductItem = ({ item }: { item: any }) => {
    return <ProductHomeItem {...item} />;
  };
   return (
    <SafeAreaView >
        {/* <ScrollView style={Style.container}> */}
              <Header title="Find All You Need" showSearch/>

              <FlatList showsHorizontalScrollIndicator={false}style={style.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item,index)=>String(index)}></FlatList>

              <FlatList 
              style={style.productList} 
              data={filteredProducts} 
              renderItem={renderProductItem}
               keyExtractor={(item,index) => String(item.id)} 
               numColumns={2}
               ListFooterComponent={<View style={{height:200}}/>}>
              
               </FlatList>
        {/* </ScrollView> */}
    </SafeAreaView>
  );
}

export default HomeScreen;
