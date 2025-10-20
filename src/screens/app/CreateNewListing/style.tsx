import { StyleSheet } from "react-native";
import { colors } from "../../../utils/Color";

export const Style=StyleSheet.create({
  sectionTitle:{
    fontWeight:'500',
    fontSize:16,
    color:colors.grey,
    marginBottom:16,
  },
  container:{
   padding:24,

  },
  image:{
    width:100,
    height:100,
    borderRadius:4,
    marginRight:8,
  },
  uploadContainer:{
    width:100,
    height:100,
    borderWidth:1,
    borderRadius:8,
    borderColor:colors.grey,
    borderStyle:'dotted',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginRight:8,
    marginTop:8,

  },
  uploadCircle:{
    width:32,
    height:32,
    borderRadius:28,
    backgroundColor:colors.lightGrey,
     flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'

  },
  uploadPlus:{
    color:colors.white,
    fontSize:28,
    marginTop:-4,
  },
  imageRow:{
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap'
  }
  
}
)