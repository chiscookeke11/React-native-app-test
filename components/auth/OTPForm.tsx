import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";




export default function OTPForm() {
const LENGTH = 6;


 const [otp, setOtp] = useState(Array(LENGTH).fill(""));
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  const inputs = useRef([]);



  useEffect(() => {
    let interval: NodeJS.Timeout;


    if (timer > 0) {
        interval = setInterval(() =>  {
            setTimer((prev) => prev - 1);
        }, 1000);
    } else {
        setIsResendDisabled(false)
    }

    return () => clearInterval(interval)
  }, [timer])





//   Resend function
 const handleResend = () => {
    setTimer(30);
    setIsResendDisabled(true);
    console.log("Resend OTP...");
  };



//   INPUT CHANGE
 const handleChange = (text: string, index: number) => {
    //  HANDLE PASTE (important)
    if (text.length > 1) {
      const pasted = text.slice(0, LENGTH).split("");
      setOtp(pasted);

      pasted.forEach((digit, i) => {
        if (inputs.current[i]) {
          inputs.current[i].setNativeProps({ text: digit });
        }
      });

      inputs.current[LENGTH - 1]?.focus();
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < LENGTH - 1) {
      inputs.current[index + 1].focus();
    }
  };


    // ⬅ BACKSPACE
    const handleBackspace = (key, index) => {
      if (key === "Backspace" && index > 0 && !otp[index]) {
        inputs.current[index - 1].focus();
      }
    };

    // AUTO SUBMIT
    useEffect(() => {
      if (otp.every((digit) => digit !== "")) {
        const code = otp.join("");
        console.log("OTP Entered:", code);
      }
    }, [otp]);


    return (
        <View style={styles.container}>


            <Text style={styles.pageTitle} > OTP Verification</Text>



            <Text style={styles.paragraph} >Enter the 6 - digit code sent to +234********26. Didn,t receive a code? <Text style={{ color: "#2DBAA4" }} > Try again</Text></Text>



{/* the otp inputs  */}
<View style={styles.container}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.box}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) =>
              handleBackspace(nativeEvent.key, index)
            }
            ref={(ref) => (inputs.current[index] = ref)}
            textContentType="oneTimeCode" // 🍎 iOS autofill
            autoComplete="sms-otp"        // 🤖 Android autofill
          />
        ))}
      </View>

      {/* TIMER / RESEND */}
      <View style={styles.bottom}>
        {isResendDisabled ? (
          <Text style={styles.timerText}>
            Resend code in {timer}s
          </Text>
        ) : (
          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resendText}>Resend Code</Text>
          </TouchableOpacity>
        )}
      </View>


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

    const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginTop: 40,
  },

  container: {
    flexDirection: "row",
    gap: 10,
  },

  box: {
    width: 50,
    height: 60,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f2f2f2",
    textAlign: "center",
    fontSize: 20,
  },

  bottom: {
    marginTop: 20,
  },

  timerText: {
    color: "#888",
  },

  resendText: {
    color: "#253E86",
    fontWeight: "600",
  },
});

})