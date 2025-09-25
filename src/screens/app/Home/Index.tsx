import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Style } from "./style";

const HomeScreen=()=>{
   return (
    <SafeAreaView >
        <ScrollView style={Style.container}>
              <Text>Home Screen</Text>
        </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;