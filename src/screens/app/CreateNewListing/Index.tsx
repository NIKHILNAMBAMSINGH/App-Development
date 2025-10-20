import { Image, Linking, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header/Index";
import { Style } from "./style";
import ListItem from "../../../components/ListItem/Index";
import EditableBox from "../../../components/EditableBox/Index";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import { Asset, launchImageLibrary } from "react-native-image-picker";

const CreateNewListing=({navigation})=>{

const [images, setImages] = useState<Asset[]>([]);

  const onBack=()=>{
    navigation.goBack();
  }
const uploadNewImages = async () => {
  console.log('Opening image picker...');
  const result = await launchImageLibrary({
    mediaType: 'photo',
    selectionLimit: 1,
  });
   if (result?.assets?.length) {
    setImages(list => [...list, ...(result.assets ?? [])]);
  }
};
  return (
    <SafeAreaView>
      <Header showBack={true} onBackPress={onBack}title="Create a new Listing"></Header>
            <ScrollView style={Style.container}>
            <Text style={Style.sectionTitle}>Upload Photos</Text>

            <View style={Style.imageRow}>
<TouchableOpacity onPress={uploadNewImages} style={Style.uploadContainer}>
              <View style={Style.uploadCircle}>
                  <Text style={Style.uploadPlus}>+</Text>
              </View>
            </TouchableOpacity>
             {images?.map(image=>(
               <Image
                                key={image?.fileName}
                                style={Style.image}
                                source={{ uri: image?.uri }}
                              />
             ))}
            </View>
            </ScrollView>
    </SafeAreaView>
  )
   
}
export default CreateNewListing;