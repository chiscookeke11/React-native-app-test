import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import OnboardingStep1 from './screens/OnboardingStep1';
import OnboardingStep2 from './screens/OnboardingStep2';

const Stack = createNativeStackNavigator();

export default function OnboardingNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Step1" component={OnboardingStep1} />
      <Stack.Screen name="Step2" component={OnboardingStep2} />
    </Stack.Navigator>
  );
}