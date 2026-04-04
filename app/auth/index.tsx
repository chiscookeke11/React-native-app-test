import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CreateAccount from './screens/CreateAccount';
import SignIn from './screens/SignIn';


const Stack = createNativeStackNavigator();

export default function Index() {
    return (
        <SafeAreaView style={styles.container}>

            <View>

                <TouchableOpacity style={styles.supportButton} onPress={() => { }}>
                    <Text style={styles.supportButtonText}>Support</Text>
                </TouchableOpacity>
            </View>


            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
                <Stack.Screen name="SignIn" component={SignIn} />
            </Stack.Navigator>


        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        backgroundColor: "#ffffff"
    },
    supportButton: {
        alignSelf: 'center',
        backgroundColor: '#2DBAA4',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    supportButtonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
    },
});