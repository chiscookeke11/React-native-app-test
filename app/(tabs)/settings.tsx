import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function SettingsPage() {
  return (
    <View className="flex-1 bg-white px-6 py-10">
      <Text className="mb-2 text-3xl font-bold">Settings</Text>
      <Text className="mb-4 text-gray-700">This page lives in the tabs route group.</Text>
      <Link href="/login" className="text-blue-600">
        Go to grouped auth route
      </Link>
    </View>
  );
}
