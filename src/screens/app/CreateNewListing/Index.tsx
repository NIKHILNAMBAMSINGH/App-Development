import { ActivityIndicator, Image, Linking, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header/Index";
import { Style } from "./style";
import ListItem from "../../../components/ListItem/Index";
import EditableBox from "../../../components/EditableBox/Index";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import { Asset, launchImageLibrary } from "react-native-image-picker";
import Input from "../../../components/Input/Index";

const CreateNewListing=({navigation})=>{
type ListingValues = {
  title?: string;
  description?: string;
  price?: string;
};

const [images, setImages] = useState<Asset[]>([]);

 const [loading, setLoading] = useState(false);
   const [values, setValues] = useState<ListingValues>({});
  const onBack=()=>{
    navigation.goBack();
  }

  const onDelete = (image) => {
  setImages((list) => list.filter(img => img?.fileName !== image?.fileName));
};

const onChange=(value,key)=>{
    setValues((previous)=>({...previous,[key]:value}));
}
const uploadNewImages = async () => {
   setLoading(true);
  console.log('Opening image picker...');
  const result = await launchImageLibrary({
    mediaType: 'photo',
    selectionLimit: 1,
  });
   if (result?.assets?.length) {
    setImages(list => [...list, ...(result.assets ?? [])]);
    setLoading(false);
  }
};
  return (
    <SafeAreaView>
      <Header showBack={true} onBackPress={onBack}title="Create a new Listing"></Header>
            <ScrollView style={Style.container}>
            <Text style={Style.sectionTitle}>Upload Photos</Text>

            <View style={Style.imageRow}>
<TouchableOpacity disabled={ loading} onPress={uploadNewImages} style={Style.uploadContainer}>
              <View style={Style.uploadCircle}>
                  <Text style={Style.uploadPlus}>+</Text>
              </View>
            </TouchableOpacity>
             {images?.map(image=>(
              <View style={Style.imageCont}key={image?.fileName}>
                <Image style={Style.image} source={{ uri: image?.uri }}/>
                <Pressable hitSlop={20} onPress={()=>onDelete(image)}>
                     <Image style={Style.delete} source={(require('../../../assets/close.png'))}/>
                </Pressable>
              </View>
            
             ))}
             {loading ? (
                            <ActivityIndicator />
                        ) : null}
            </View>
  <Input placeholder="Listing Title" label="Title" value={values.title} onChangeText={(v)=>onChange(v,'title')}></Input>
             <Input placeholder="Enter price in USD" label="Price" value={values.price}  onChangeText={(v)=>onChange(v,'price')} keyboardType="numeric"></Input>
               <Input styles={Style.textarea}placeholder="Tell us more" label="Description" value={values.description} onChangeText={(v)=>onChange(v,'description')} multiline></Input>
           
            </ScrollView> 
    </SafeAreaView>
  )
   
}
export default CreateNewListing;