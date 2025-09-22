
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { style } from '../Button/style'
import { Styles } from './style'

const Checkbox=({checked,onCheck}:{checked:boolean,onCheck?:(newValue:boolean)=>void})=>{
return (
   <TouchableOpacity activeOpacity={0.5} style={Styles.container} onPress={()=>onCheck?.(!checked)}>
{
    checked?(
 <View style={Styles.innerContainer}>
    <Image style={Styles.checkInBox}source={require('../../assets/check.png')}></Image>
    </View>
    ):null

}
   </TouchableOpacity>
)
}

export default Checkbox