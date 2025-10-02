import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Style } from "./style";
import Header from "../../../components/Header/Index";
import { categories } from "../../../data/categories";
import CategoryBox from "../../../components/CategoryBox/Index";

const HomeScreen=()=>{
  const renderCategoryItem=({item,index}:{item:any;index:number})=>{
        return (
          <CategoryBox title={item.title} image={item?.image}></CategoryBox>
)
  }
   return (
    <SafeAreaView >
        <ScrollView style={Style.container}>
              <Header title="Find All You Need" showSearch/>
              <Text>Home</Text>

              <FlatList showsHorizontalScrollIndicator={false}style={Style.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item,index)=>String(index)}></FlatList>
        </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;