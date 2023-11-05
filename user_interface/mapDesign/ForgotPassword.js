import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import firebase from 'firebase';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    firebase.auth().sendPasswordResetEmail(email).then(() => {
      console.log('Password reset email sent!');
    }).catch((error) => {
      console.log(error);
    });
  };
  
  return (
    <LinearGradient
      style={styles.forgotPassword}
      locations={[0, 1]}
      colors={["#000a41", "#2089b6"]}
    >
      <View style={styles.pageContainer} />
      <Text style={styles.welcome}>Forgot Password?</Text>
      <TextInput
        style={styles.forgotPasswordChild}
        placeholder="Email"
        placeholderTextColor="rgba(255, 255, 255, 0.36)"
      />
      <Button
        title="Continue"
        radius={5}
        iconPosition="left"
        type="solid"
        color="#18b6d9"
        titleStyle={styles.frameButtonBtn}
        containerStyle={styles.frameButtonBtn1}
        buttonStyle={styles.frameButtonBtn2}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  frameButtonBtn: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "OpenSans-Regular",
  },
  frameButtonBtn1: {
    left: 30,
    top: 276,
    position: "absolute",
  },
  frameButtonBtn2: {
    borderRadius: 10,
    width: 330,
    height: 62,
  },
  pageContainer: {
    top: 0,
    left: 0,
    width: 390,
    position: "absolute",
    height: 844,
  },
  welcome: {
    height: "5.09%",
    top: "9.12%",
    left: 36,
    fontSize: FontSize.size_13xl,
    lineHeight: 36,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    width: 292,
    position: "absolute",
  },
  forgotPasswordChild: {
    top: 167,
    left: 30,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray,
    width: 330,
    height: 62,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  forgotPassword: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: Color.darkBG,
    height: 844,
  },
});

export default ForgotPassword;
