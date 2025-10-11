import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/Color";

const { width } =Dimensions.get('window')
export const style=StyleSheet.create({
    container:{
       marginHorizontal:24,
        paddingVertical:16,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:colors.borderColor
       
    },
    closeIcon:{
        width:24,
        height:24,

    },
    content:{
        flex:1,
    },
    image:{
        width:100,
       height:100,
       borderRadius:8,
       marginRight:20,
    },
    title:{
        color:colors.textGrey,
        paddingVertical:8,
       
    },
    price:{
       color:colors.black,
       fontWeight: 'bold',
       paddingBottom:8,
    }
})