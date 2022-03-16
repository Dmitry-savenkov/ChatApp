import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ContactViewScreen from './src/screens/ContactViewScreen';
import ChatRoomScreen from './src/screens/ChatRoomScreen';
import ThemesContextProvider from './src/context/Context';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignUp"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="ContactView" component={ContactViewScreen} />
          <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemesContextProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
