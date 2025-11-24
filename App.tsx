import React, { useEffect, useState } from 'react';
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
import Routes from './Routes';


interface UserContextType {
  user: Record<string, any> | null;
  setUser: React.Dispatch<React.SetStateAction<Record<string, any> | null>>;
}

export const UserContext = React.createContext<UserContextType>({
  user: null,
  setUser: () => null,
});

const App = () => {
  const isSignedIn=true;
   const [user, setUser] = useState<Record<string, any> | null>(null);
  console.log('User ==>',user);
  
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '664454065013-fs90fmkvi530053kclc7610v3vbs73pc.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []); 

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{user,setUser}}>
         <Routes/>
      </UserContext.Provider>
      </SafeAreaProvider>
     
  );
};

export default App;