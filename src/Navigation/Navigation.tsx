import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { navigationRef } from '../utils/NavigationUtil';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import SplashScreen from '../screens/SplashScreen';
import NextScreen from '../screens/NextScreen';
import QuizScreen from '../screens/QuizScreen';






const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
 
     <NavigationContainer ref ={navigationRef} >
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="NextScreen" component={NextScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        </Stack.Navigator>
    </NavigationContainer>
   
  );
};

export default Navigation;
