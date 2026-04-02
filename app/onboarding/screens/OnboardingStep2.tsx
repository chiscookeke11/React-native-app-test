import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function OnboardingStep2({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover Features</Text>
      <Text style={styles.description}>
        Here you can show your app's features or guide users through key actions.
      </Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Step3')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 15 },
  description: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});