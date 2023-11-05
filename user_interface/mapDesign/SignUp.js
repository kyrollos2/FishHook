import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

export default SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.signUp}
      locations={[0, 1]}
      colors={["#000a41", "#2089b6"]}
    >
      <View style={styles.pageContainer} />
      <Text style={styles.welcome}>Sign Up</Text>
      <TextInput
        style={[styles.signUpChild, styles.signLayout]}
        value={username}
        onChangeText={setUsername}
        placeholder="Create Username"
        placeholderTextColor="rgba(255, 255, 255, 0.36)"
      />
      <TextInput
        style={[styles.signUpItem, styles.signLayout]}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="rgba(255, 255, 255, 0.36)"
      />
      <TextInput
        style={[styles.signUpInner, styles.signLayout]}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="rgba(255, 255, 255, 0.36)"
      />
      <Button
        title="Continue"
        radius={5}
        iconPosition="left"
        type="solid"
        color="#18b6d9"
        titleStyle={styles.frameButtonBtn}
        onPress={() => navigation.navigate("EnterName")}
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
    top: 485,
    position: "absolute",
  },
  frameButtonBtn2: {
    borderRadius: 10,
    width: 330,
    height: 62,
  },
  signLayout: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSansRegular,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    height: 62,
    width: 330,
    backgroundColor: Color.colorGray,
    borderRadius: Border.br_3xs,
    left: 30,
    position: "absolute",
  },
  pageContainer: {
    top: 0,
    left: 0,
    width: 390,
    position: "absolute",
    height: 844,
  },
  welcome: {
    top: "9.12%",
    left: 36,
    fontSize: FontSize.size_13xl,
    lineHeight: 36,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    width: 129,
    position: "absolute",
  },
  signUpChild: {
    top: 272,
  },
  signUpItem: {
    top: 201,
  },
  signUpInner: {
    top: 343,
  },
  frameTextinput: {
    top: 414,
  },
  signUp: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: Color.darkBG,
    height: 844,
  },
});
}


