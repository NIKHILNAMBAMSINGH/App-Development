import { StyleSheet } from "react-native";
import { colors } from "../../utils/Color";

export const style=StyleSheet.create({
    container:{
        backgroundColor:colors.blue,
        paddingVertical:20,
        marginTop:20,
        paddingHorizontal:8,
        borderRadius:8,
        width: "100%",
        alignSelf: "stretch", 

    },
    title:{
        color:colors.white,
        textAlign:'center',
        fontSize:16,
        fontWeight:"bold",
    }
})