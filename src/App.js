import * as React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen/LoginScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import AuthDeneme from './screens/AuthDeneme';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AuthDeneme" component={AuthDeneme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
