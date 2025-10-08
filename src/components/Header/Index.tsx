import { Image, Text, View } from "react-native";
import { Pressable } from "react-native";
import { style } from "./style";
import { useState } from "react";
import Input from "../Input/Index";



const Header = ({
  title,
  onBackPress,
  onLogout,
  showLogout,
  onSearch,
  keyword,
  showSearch,
  showBack,
}: {
  title: string;
  onBackPress?: () => void;
  onLogout?: () => void;
  showLogout?: boolean;
  onSearch?: any;
  keyword?:any;
  showSearch?: boolean;
  showBack?: boolean;
})=>{

    const [showSearchInput,setShowSearchInput]=useState(false);

    const onSearchClick=()=>{
        setShowSearchInput(!showSearchInput)
    }

    return(
        <View style={style.mainContainer}>
             <View style={style.container}>
            {
                showBack?(
                    <Pressable onPress={onBackPress}>
                         <Image style={style.icon}source={require('../../assets/back.png')}></Image>
                    </Pressable>
                ): showSearch?(
                    <Pressable onPress={onSearchClick}>
                         <Image  style={style.icon} source={require('../../assets/search.png')}></Image>
                          console.console.log('search');
                    </Pressable>
                ): <View style={style.space}></View>}
                <Text style={style.text}>{title}</Text>
                {
                    showLogout?(
                         <Pressable onPress={onLogout}>
                         <Image style={style.icon} source={require('../../assets/logout.png')}></Image>
                    </Pressable>
                    ):<View style={style.space}></View>
                }
        </View>
        {
            showSearchInput?(
                <Input label={""} onChangeText={onSearch} value={keyword} placeholder="Type your Keyword ..."></Input>
            ):null}
        </View>
        
    )
      
}

export default Header;