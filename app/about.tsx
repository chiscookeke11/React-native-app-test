import { Text, View } from 'react-native';

export default function AboutPage() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="mb-2 text-3xl font-bold">About</Text>
      <Text className="text-center text-gray-700">
        This screen is a standard static route located at app/about.tsx.
      </Text>
    </View>
  );
}
