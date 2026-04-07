import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';

interface CustomInputProps extends TextInputProps {
    leftElement?: React.ReactNode; // optional element on the left (flag, icon)
    containerStyle?: ViewStyle;     // optional style override for container
    label?: string
}

const CustomInput: React.FC<CustomInputProps> = ({
    leftElement,
    label,
    containerStyle,
    style,
    ...textInputProps
}) => {
    return (
        <View style={styles.inputWrapper} >
            <Text style={styles.label} >{label && label}</Text>
            <View style={[styles.container, containerStyle]}>
                {leftElement && <View style={styles.left}>{leftElement}</View>}
                <TextInput
                    style={[styles.input, style]}
                    {...textInputProps}
                />
            </View>
        </View>
    );
};

export default CustomInput;

const styles = StyleSheet.create({

    inputWrapper: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: 8
    },

    label: {
        fontSize: 14,
        color: "#10182A",
           fontFamily: 'Sora_400Regular',
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#10182A',
        borderRadius: 5,
        paddingHorizontal: 12,
        height: 50,
        width: '100%',
        backgroundColor: "#CCCCCC1A"
    },
    left: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 18,
    },
});