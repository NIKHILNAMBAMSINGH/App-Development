import { StyleSheet } from "react-native";
import { colors } from "../../utils/Color";

export const style=StyleSheet.create({
    container:{
        marginBottom:20,
    },
    label:{
      
       marginBottom:8,
       color:colors.blue,
       fontWeight:"500",
       fontSize:14,

    },
    inputContainer:{
     borderWidth:1,
     borderColor:colors.grey,
     borderRadius:14,
     alignItems:'center',
     flexDirection:'row',
    },
    input:{
        paddingHorizontal:16,
        paddingVertical:20,
        flex:1,
    },
    eye:{
        width:24,
        height:24,
        marginHorizontal:16,

    },
    arrow:{
         width:15,
        height:16,
        marginHorizontal:16,
         opacity: 0.6,
         transform:[{rotate:'90deg'}]

    },
    placeholderStyle:{
         paddingHorizontal:16,
        paddingVertical:20,
        flex:1,
        color:colors.grey
    },
    modelWrapper:{
        backgroundColor:'rgba(0,0,0,0.5',
        justifyContent:'center',
        alignItems:'center',
       flex:1
    },
    modelContent:{
       backgroundColor:colors.white,
       borderRadius:8,
       padding:16,
       width:'80%'
    },
    headerTitle:{
        marginBottom:16,
        color:colors.black,
        fontSize:16,
    },
    optionText: {
        color: colors.black,
        paddingVertical: 4,
        fontSize: 15,
    },
    selectedOption: {
        color: colors.blue,
        fontWeight: 'bold',
    }

})