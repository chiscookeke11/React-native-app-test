import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function OnboardingStep1({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App!</Text>
      <Text style={styles.description}>
        This is the first step of onboarding. Learn the basics here.
      </Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Step2')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 15 },
  description: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});