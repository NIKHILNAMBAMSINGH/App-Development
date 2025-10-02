import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "./style";
import Header from "../../../components/Header/Index";
import { categories } from "../../../data/categories";
import CategoryBox from "../../../components/CategoryBox/Index";
import { products } from "../../../data/products";
import ProductHomeItem from "../../../components/ProductHomeItem/Index";

const HomeScreen=()=>{
  const renderCategoryItem=({item,index}:{item:any;index:any})=>{
        return (
          <CategoryBox isFirst={index===0}{...item}></CategoryBox>
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
              data={products} 
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