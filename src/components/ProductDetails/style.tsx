import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/Color";

const { width } =Dimensions.get('window')
const {height}=Dimensions.get('window')
export const style=StyleSheet.create({
    content:{
       backgroundColor:colors.white,
       marginTop:-40,
       borderTopLeftRadius:16,
      borderTopRightRadius:16,
      paddingHorizontal:24,

    },
    image:{
        width:'100%',
        height:height*0.45,
       
    },
    title:{
        marginTop:40,
        fontSize:24,
        fontWeight:'500',
    },

    price: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    description: {
        color: colors.textGrey,
        fontWeight: '300',
        marginVertical: 8,
    },
    
})