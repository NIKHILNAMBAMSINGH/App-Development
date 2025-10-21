import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/Color";

const { width } =Dimensions.get('window')
const {height}=Dimensions.get('window')
export const style=StyleSheet.create({
    safe: {
        flex: 1,
    },
      footer: {
        padding:24,
        flexDirection:'row',
        alignItems:'center'
    
    },
    backContainer:{
           backgroundColor:colors.white,
           padding:10,
           margin:24,
           marginRight:16,
           borderRadius:8,
           position:'absolute'
    },
    backIcon:{
        width: 20,
        height: 20,
    },
    bookmarkContainer:{
           backgroundColor:colors.lightGrey,
           padding:18,
           marginRight:16,
            borderRadius:8,
    },
    bookmarkIcon:{
        width: 24,
        height: 24,
    },
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