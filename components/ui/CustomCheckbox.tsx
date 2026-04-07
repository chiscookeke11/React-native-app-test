import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface CustomCheckboxProps{
    label: string,
    linkText: string,
    path: string
}

export default function CustomCheckbox({label, linkText, path}: CustomCheckboxProps) {
    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.checkboxContainer}>
            <TouchableOpacity onPress={() => setChecked(!checked)}>
                <Ionicons
                    name={checked ? 'checkbox-outline' : 'square-outline'}
                    size={24}
                    color="#1D1B20"
                />
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>
                {label} <Text style={styles.checkboxLink}>{linkText}</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-start",
        width: "100%",
        display: "flex",
        gap: 11
    },

    checkboxLabel: {
        fontSize: 15,
        fontFamily: 'Sora_400Regular',
        color: "#10182A"
    },

    checkboxLink: {
        textDecorationLine: 'underline'
    },
});