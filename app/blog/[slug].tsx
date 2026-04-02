import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function BlogDetailPage() {
  const { slug } = useLocalSearchParams<{ slug: string }>();

  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="mb-2 text-3xl font-bold">Blog Details</Text>
      <Text className="text-gray-700">Slug: {slug}</Text>
    </View>
  );
}
