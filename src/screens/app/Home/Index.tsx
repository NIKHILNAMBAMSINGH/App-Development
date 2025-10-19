import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "./style";
import Header from "../../../components/Header/Index";
import { categories } from "../../../data/categories";
import CategoryBox from "../../../components/CategoryBox/Index";
import { products } from "../../../data/products";
import ProductHomeItem from "../../../components/ProductHomeItem/Index";
import { useEffect, useState } from "react";
import ProductDetails from "../../../components/ProductDetails/Index";


const HomeScreen=({navigation})=>{

  const [selectedCategory,setSelectedCategory]=useState();
  const [keyword,setKeyword]=useState("");
  const [filteredProducts,setFilteredProducts]=useState(products);
  console.log("keyword ==>",keyword)
  
  useEffect(()=>{
    if(selectedCategory &&!keyword){
      const updatedFilteredProduct=products.filter((product)=>product?.id===selectedCategory);
      console.log(updatedFilteredProduct)
      setFilteredProducts(updatedFilteredProduct);
    }
    else if(selectedCategory && keyword){
      const updatedFilteredProduct=products.filter((product)=>product?.id===selectedCategory && product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
      console.log(updatedFilteredProduct)
      setFilteredProducts(updatedFilteredProduct);
    }
    else if(!selectedCategory && keyword){
      const updatedFilteredProduct=products.filter((product)=>product?.title?.includes(keyword));
      console.log(updatedFilteredProduct)
      setFilteredProducts(updatedFilteredProduct);
    }
    else{
       setFilteredProducts(products);
    }
  },[selectedCategory,keyword])
  
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
  const onProductPress=(product)=>{
 navigation.navigate('ProductDetails',{product})
  }
    return <ProductHomeItem onPress={()=>onProductPress(item)}{...item} />;
  };
   return (
    <SafeAreaView >
       
              <Header title="Find All You Need" onSearch={setKeyword} keyword={keyword}  showSearch/>

              <FlatList showsHorizontalScrollIndicator={false}style={style.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item,index)=>String(index)}></FlatList>

              <FlatList 
              style={style.productList} 
              data={filteredProducts} 
              renderItem={renderProductItem}
               keyExtractor={(item,index) => String(item.id)} 
               numColumns={2}
               ListFooterComponent={<View style={{height:200}}/>}>
              
               </FlatList>
  
    </SafeAreaView>
  );
}

export default HomeScreen;
