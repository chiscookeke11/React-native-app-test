import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import '../global.css';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
        <Stack.Screen name="blog/[slug]" options={{ title: 'Blog Details' }} />
        <Stack.Screen name="users/[id]" options={{ title: 'User Details' }} />
        <Stack.Screen name="(auth)/login" options={{ title: 'Login' }} />
      </Stack>
    </SafeAreaProvider>
  );
}
