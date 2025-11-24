import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Splash from './src/screens/auth/Splash/Index';
import SignIn from './src/screens/auth/SignIn/Index';
import Signup from './src/screens/auth/Signup/Index';
import { colors } from './src/utils/Color';
import HomeScreen from './src/screens/app/Home/Index';
import ProfileScreen from './src/screens/app/Profile/Index';
import Favorites from './src/screens/app/Favorites/Index';
import { Image } from 'react-native';
import ProductDetails from './src/components/ProductDetails/Index';
import Setting from './src/screens/app/Settings/Index';
import CreateNewListing from './src/screens/app/CreateNewListing/Index';
import MyListings from './src/screens/app/MyListings/Index';
import { UserContext } from './App';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStackScreen=({})=>{
  return(
                 <Stack.Navigator>
                    <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="Setting" component={Setting} options={{headerShown:false}}/>
                    <Stack.Screen name="CreateNewListing" component={CreateNewListing} options={{headerShown:false}}/>
                     <Stack.Screen name="ListListing" component={MyListings} options={{headerShown:false}}/>
                </Stack.Navigator>
  )
}

const Tabs=()=>(
   <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            if (route.name === 'Home') {
              icon = focused
                ? require('./src/assets/Tabs/home_active.png')
                : require('./src/assets/Tabs/home.png');
            } else if (route.name === 'Favorites') {
              icon = focused ?  require('./src/assets/Tabs/bookmark_active.png'): require('./src/assets/Tabs/bookmark.png');
            }
            else if (route.name === 'ProfileStackScreen') {
              icon = focused ?  require('./src/assets/Tabs/profile_active.png'): require('./src/assets/Tabs/profile.png');
            }
            return <Image source={icon} style={{height:26,width:26}} />;
          },
          tabBarShowLabel:false,
          headerShown:false,
          tabBarStyle:{borderTopColor:colors.lightGrey}
        })}
        >
      <Tab.Screen name="Home" component={HomeScreen} />
       <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="ProfileStackScreen" component={ProfileStackScreen} />
    </Tab.Navigator>
)

const Routes = () => {
  const isSignedIn=false;
 const ctx = useContext(UserContext);
   const { user, setUser } = ctx;

  console.log('UserContext in Routes ==>',user);

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};


  return (
          <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>{
          user?.data?.token?(
            <>
            <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
            <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown:false}}/>
            </>

          ):(
            <>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/> 
          <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
          <Stack.Screen name="SignUp" component={Signup} options={{headerShown:false}}/> 
          </>
          )
          }
        </Stack.Navigator>
      </NavigationContainer>
     
  );
};

export default Routes;