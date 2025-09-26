import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Style } from "./style";
import Header from "../../../components/Header/Index";

const HomeScreen=()=>{
   return (
    <SafeAreaView >
        <ScrollView style={Style.container}>
              <Header title="Find All You Need" showSearch/>
              <Text>Home</Text>
        </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;