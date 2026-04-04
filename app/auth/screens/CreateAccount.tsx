import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function CreateAccount({ }) {
    return (
        <SafeAreaView style={styles.container} >
            <Text  >Hello, Sign up</Text>
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    }

})
