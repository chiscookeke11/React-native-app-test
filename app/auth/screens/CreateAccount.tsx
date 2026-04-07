import { fonts } from '@/fonts/fonts';
import { useFonts } from '@expo-google-fonts/plus-jakarta-sans';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CreateAccount({ }) {
    const navigation = useNavigation();


    const [fontsLoaded] = useFonts(fonts);

    if (!fontsLoaded) return null;

    return (
        <SafeAreaView style={styles.container} >
            <Text  >Hello, Sign up</Text>

            <Text style={styles.bottomText}  >Have an account?
                <Text
                    onPress={() => navigation.navigate('SignIn')}
                    style={styles.bottomTextLink}
                >Log in</Text></Text>
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column"
    },


    bottomText: {
        color: "#CCCCCCCC",
        fontSize: 15,
        fontFamily: 'Sora_400Regular',
    },

    bottomTextLink: {
        color: "#10182A"
    }
})
