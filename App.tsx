import React, { useEffect } from 'react';
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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const profileStackScreen=({})=>{
  return(
                 <Stack.Navigator>
                    <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="Setting" component={Setting} options={{headerShown:false}}/>
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
            else if (route.name === 'Profile') {
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
      <Tab.Screen name="Profile" component={profileStackScreen} />
    </Tab.Navigator>
)

const App = () => {
  const isSignedIn=true;
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '664454065013-fs90fmkvi530053kclc7610v3vbs73pc.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []); 

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};


  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>{
          isSignedIn?(
            <>
            <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
            {/* <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown:false}}/> */}
            </>

          ):(
            <>
          {/* <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/> */}
          {/* <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
          <Stack.Screen name="SignUp" component={Signup} options={{headerShown:false}}/> */}
          </>
          )
          }
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
     
  );
};

export default App;