import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CreateAccount from './screens/CreateAccount';
import SignIn from './screens/SignIn';


const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="CreateAccount" component={CreateAccount}  />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}