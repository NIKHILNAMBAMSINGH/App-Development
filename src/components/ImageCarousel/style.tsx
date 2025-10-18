import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/Color";

const {height,width}=Dimensions.get('window');
export const style=StyleSheet.create({
   image:{
    width:width,
     height:height*0.45,
   },
   list:{
    
   },
   activeLine:{
      backgroundColor:colors.blue,
      width:20,
   }, 
   pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
    },
    paginationLine: {
        height: 4,
        width: 20,
        borderRadius: 10,
        backgroundColor: colors.white,
        margin: 5,
    },
   
})