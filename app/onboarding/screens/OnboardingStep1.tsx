import { PlusJakartaSans_300Light, useFonts } from '@expo-google-fonts/plus-jakarta-sans';
import { PlusJakartaSans_500Medium } from '@expo-google-fonts/plus-jakarta-sans/500Medium';
import { PlusJakartaSans_600SemiBold } from '@expo-google-fonts/plus-jakarta-sans/600SemiBold';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function OnboardingStep1({ navigation }: any) {

  let [fontsLoaded] = useFonts({
    PlusJakartaSans_300Light,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper} >
        <Image source={require('../../../assets/onboarding/onboarding-screen-logo.png')} style={styles.image} />
        <Text style={styles.heading}>
          Welcome to <Text style={styles.name}>UnioGate</Text>
        </Text>
      </View>

      <Text style={styles.subtext}>They have Crypto, You need Naira.</Text>


      {/* The current step Image  */}
      <View style={styles.imageWrapper}  >


        {/* floating images  */}
        <Image source={require('../../../assets/onboarding/changing-currency.png')} style={styles.moneyImage} />
        <Image source={require('../../../assets/onboarding/Moneyverse-Credit-Card.png')} style={styles.cardImage} />

        <Image source={require('../../../assets/onboarding/transfer.png')} style={styles.stepImage} />
      </View>



      {/* <Button title="Next" onPress={() => navigation.navigate('Step2')} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#253E86',
    gap: 40,
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 24
  },

  image: {
    width: 50,
    height: 50,
    resizeMode: "cover"
  },

  heading: {
    fontFamily: 'PlusJakartaSans_300Light',
    color: '#ffffff',
    fontSize: 24,
  },

  name: {
    fontFamily: "PlusJakartaSans_500Medium"
  },

  subtext: {
    color: '#ffffff',
    fontSize: 40,
    textAlign: "center",
    fontFamily: "PlusJakartaSans_600SemiBold"
  },

  imageWrapper: {
    width: "100%",
    height: 200,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 65,
    marginBottom: 10
  },

  stepImage: {
    width: "85%",
    resizeMode: "cover",
  },

  moneyImage: {
    width: "100%",
    maxWidth: 111,
    position: "absolute",
    top: -75,
    left: 0
  },

  cardImage: {
    width: "100%",
    maxWidth: 100,
    position: "absolute",
    bottom: -18,
    right: -6
  }

});