import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function LoginPage() {
  return (
    <View className="flex-1 items-center justify-center gap-3 bg-white px-6">
      <Text className="text-3xl font-bold">Login</Text>
      <Text className="text-center text-gray-700">
        This is an auth route group page: app/(auth)/login.tsx
      </Text>
      <Link href="/" className="text-blue-600">
        Back to Home
      </Link>
    </View>
  );
}
