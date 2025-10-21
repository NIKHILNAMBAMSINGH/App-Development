import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Style } from "./style";
import { products } from "../../../data/products";
import FavoriteItem from "../../../components/FavouriteItem/Index";
import Header from "../../../components/Header/Index";

const MyListings = ({ navigation }) => {

    const renderItem = ({ item }) => {
        const onProductItem = () => {
            navigation.navigate('ProductDetails', { product: item });
        };

        return (
            <FavoriteItem icon={(require('../../../assets/delete.png'))}onPress={onProductItem} {...item} />
        );
    };

    const onBack=()=>{
        navigation.goBack();
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="Favorites" showBack onBackPress={onBack}/>
            <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => String(item?.id)}
            />
        </SafeAreaView>
    );
};

export default MyListings;
