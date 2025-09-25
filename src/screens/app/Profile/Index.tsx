import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Style } from "./style";

const ProfileScreen=()=>{
   return (
      <SafeAreaView >
          <ScrollView style={Style.container}>
                <Text>Profile</Text>
          </ScrollView>
      </SafeAreaView>
    );
}
export default ProfileScreen;