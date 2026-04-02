import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function UserDetailPage() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="mb-2 text-3xl font-bold">User Details</Text>
      <Text className="text-gray-700">User id: {id}</Text>
    </View>
  );
}
