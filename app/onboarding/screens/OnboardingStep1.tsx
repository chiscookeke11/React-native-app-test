import { useFonts } from '@expo-google-fonts/plus-jakarta-sans';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts } from '../../../fonts/fonts';


export default function OnboardingStep1({ navigation }: any) {

  const stepInfoAnim = useRef(new Animated.Value(400)).current;

  useEffect(() => {
    Animated.timing(stepInfoAnim, {
      toValue: 15,
      duration:300,
      useNativeDriver: true,
    }).start();
  }, []);

  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return null;



  return (
    <SafeAreaView style={styles.container}>


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

      {/* Step info section  */}
      <Animated.View
        style={[{ transform: [{ translateY: stepInfoAnim }] }, { width: '100%' }]}
      >
        <LinearGradient
          colors={['#FFFFFF', 'rgba(37, 62, 134, 0.2)']}
          style={styles.stepInfo}
        >
          <Text style={styles.step_info_heading}>
            No stress, No extra steps.
          </Text>
          <Text style={styles.step_info_paragraph}>
            Just pay from your wallet like you always do. UnioGate automatically handles the conversion in seconds.
          </Text>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Step2')}>
            <Ionicons name="arrow-forward" size={24} color="#000000" />
          </TouchableOpacity>
        </LinearGradient>
      </Animated.View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#253E86',
    gap: 24,
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10
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
    width: "90%",
    height: 150,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 65,
    marginBottom: 10,
  },

  stepImage: {
    width: "85%",
    resizeMode: "contain",
  },

  moneyImage: {
    width: "100%",
    maxWidth: 111,
    position: "absolute",
    top: -85,
    left: 0
  },

  cardImage: {
    width: "100%",
    maxWidth: 100,
    position: "absolute",
    bottom: -42,
    right: -6
  },

  stepInfo: {
    marginTop: "auto",
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: "auto",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    overflow: "hidden"
  },

  step_info_heading: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 28,
    textAlign: "center"
  },

  step_info_paragraph: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 30,
    fontFamily: 'Sora_400Regular',
  },

  button: {
    backgroundColor: "#2DBAA4",
    borderWidth: 2,
    borderColor: "#000000",
    padding: 17,
    borderRadius: "100%",
    flexShrink: 0,
    width: 80,
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
    marginTop: 10
  },

});