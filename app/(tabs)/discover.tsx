import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const posts = ['first-post', 'expo-router-basics', 'advanced-layouts'];

export default function DiscoverPage() {
  return (
    <View className="flex-1 bg-white px-6 py-10">
      <Text className="mb-2 text-3xl font-bold">Discover</Text>
      <Text className="mb-5 text-gray-700">Explore some dynamic blog routes:</Text>
      {posts.map((slug) => (
        <Link key={slug} href={`/blog/${slug}`} className="mb-3 text-blue-600">
          /blog/{slug}
        </Link>
      ))}
    </View>
  );
}
