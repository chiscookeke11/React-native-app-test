import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomePage() {
  return (
    <View className="flex-1 items-center justify-center gap-3 bg-white px-6">
      <Text className="text-3xl font-bold">Welcome 👋</Text>
      <Text className="text-center text-base text-gray-700">
        This is the Home page. Your Expo Router setup supports static, grouped, and dynamic routes.
      </Text>
      <Link href="/about" className="text-blue-600">
        Go to About
      </Link>
      <Link href="/blog/first-post" className="text-blue-600">
        Open blog dynamic route
      </Link>
      <Link href="/users/42" className="text-blue-600">
        Open user dynamic route
      </Link>
    </View>
  );
}
