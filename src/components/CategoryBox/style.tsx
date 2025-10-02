import { StyleSheet } from "react-native";
import { colors } from "../../utils/Color";

export const style=StyleSheet.create({
    container:{
        marginHorizontal:8,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'

    },
    imageContainer:{
        backgroundColor:colors.lightGrey,
        borderRadius:8,
        marginBottom:8,
        padding:8,
    },
    image:{
       width:32,
       height:32,
       borderRadius:8,
    },
    title:{
        color:colors.textGrey
    },
    price:{
       color:colors.black
    }
})