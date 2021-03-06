import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import AddChatScreen from './Screens/AddChatScreen';
import ChatScreen from './Screens/ChatScreen';
import { LogBox } from 'react-native';


LogBox.ignoreLogs(['Setting a timer for a long period of time']);
const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle : {backgroundColor:"#2c6bed"},
  headerTitleStyle : {color:"white", alignSelf:"center"},
  headerTintColor : "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {globalScreenOptions}>
       <Stack.Screen name='Login' component = {LoginScreen}/>
       <Stack.Screen name='Register' component = {RegisterScreen}/>
       <Stack.Screen name='Home' component = {HomeScreen}/>
       <Stack.Screen name='AddChat' component = {AddChatScreen}/>
       <Stack.Screen name='Chat' component = {ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
