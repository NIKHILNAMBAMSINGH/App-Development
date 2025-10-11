import { FlatList, ScrollView, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Style } from "./style";
import { products } from "../../../data/products";
import FavoriteItem from "../../../components/FavouriteItem/Index";
import Header from "../../../components/Header/Index";


const Favorites=()=>{
    const renderItem=({item})=>(
         <FavoriteItem {...item}></FavoriteItem>
    )
    return (
        <SafeAreaView >
            <Header title="Favorites"/>
                 <FlatList data={products} renderItem={renderItem} keyExtractor={(item)=>String(item?.id)}/>
            
        
        </SafeAreaView>
      );
}

export default Favorites;