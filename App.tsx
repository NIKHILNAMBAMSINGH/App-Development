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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Tabs=()=>(
   <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
       <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
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
      </SafeAreaProvider>
     
  );
};

export default App;