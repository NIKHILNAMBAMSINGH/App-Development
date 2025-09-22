import { StyleSheet } from "react-native";
import { colors } from "../../../utils/Color";
export const style=StyleSheet.create({
    container: {
    padding: 24,
    },
    agreeRow:{
        flexDirection:'row',
        alignItems:'center',
            
    },
    agreeText:{
        color:colors.blue,
        marginHorizontal:15,
    },
    agreeTextBold:{
        fontWeight:'bold'
    },
})