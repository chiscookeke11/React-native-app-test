import { StyleSheet, Text, TouchableOpacity, View } from "react-native";




export default function OTPForm() {
    return (
        <View style={styles.container}>


            <Text style={styles.pageTitle} > OTP Verification</Text>



            <Text style={styles.paragraph} >Enter the 6 - digit code sent to +234********26. Didn,t receive a code? <Text style={{ color: "#2DBAA4" }} > Try again</Text></Text>


            <View style={styles.bottomSection}  >
                <Text style={styles.bottomSection_p} >Resend code</Text>

                <View style={styles.buttonWrapper}  >

                    <TouchableOpacity
                        style={styles.outlineButton}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.outlineButtonText} >Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.buttonText} >Confirm</Text>
                    </TouchableOpacity>
                </View>

            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        gap: 36,
        width: "100%",
        paddingHorizontal: 26,
        height: "auto"
    },

    pageTitle: {
        color: "#10182A",
        fontSize: 32,
        fontFamily: "PlusJakartaSans_600SemiBold"
    },

    paragraph: {
        color: "#10182A",
        fontSize: 18,
        textAlign: "center",
        fontFamily: 'Sora_300Light',
    },

    bottomSection: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 33,
        justifyContent: "center",
        width: "100%"
    },

    bottomSection_p: {
        color: "#10182A",
        fontSize: 16,
        fontFamily: 'Sora_400Regular',
    },

    buttonWrapper: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 36,
        flexDirection: "row"
    },

    button: {
        flex: 1,
        backgroundColor: "#253E86",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 11,
        borderWidth: 1,
        borderColor: "#253E86"
    },

    outlineButton: {
        flex: 1,
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 11,
        borderWidth: 1,
        borderColor: "#10182A"
    },

    outlineButtonText: {
        color: "#10182A",
        fontSize: 20,
        fontFamily: 'Sora_400Regular',
    },

    buttonText: {
        color: "#ffffff",
        fontSize: 20,
        fontFamily: 'Sora_400Regular',
    },


})