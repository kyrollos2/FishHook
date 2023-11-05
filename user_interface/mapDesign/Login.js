import * as React from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";

const LoginView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    // Perform login logic here
  };

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.logIn, styles.logInBg]}
      locations={[0, 1]}
      colors={["#101112", "#1a1b24"]}
    >
      <LinearGradient
        style={[styles.pageContainer, styles.logInBg]}
        locations={[0, 1]}
        colors={["#2089b6", "#000a41"]}
      >
        <View style={styles.pageContainerInner}>
          <Pressable
            style={styles.pageContainerInner}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <View style={styles.textParent}>
              <View style={styles.text}>
                <Text style={styles.welcome}>Welcome to FishBook</Text>
              </View>
              <View style={styles.text1}>
                <Text style={[styles.body, styles.bodyTypo1]}>
                  Please log in
                </Text>
              </View>
            </View>
            <View style={styles.frameGroup}>
              <TextInput
                style={[styles.frameChild, styles.frameLayout]}
                placeholder="Username"
                onChangeText={text => setUsername(text)}
                value={username}
                placeholderTextColor="rgba(255, 255, 255, 0.36)"
              />
              <TextInput
                style={[styles.frameItem, styles.frameLayout]}
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
                placeholderTextColor="rgba(255, 255, 255, 0.36)"
              />
              <View style={styles.textWrapper}>
                <View style={styles.text2}>
                  <Text style={[styles.body1, styles.bodyTypo1]}>Continue</Text>
                </View>
              </View>
            </View>
            <Pressable
              style={styles.forgotPassword}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={styles.forgotPassword1}>Forgot Password?</Text>
            </Pressable>
            <View style={styles.text3}>
              <Text style={[styles.body2, styles.bodyTypo]}>or</Text>
            </View>
            <View style={styles.text4}>
              <Text
                style={[styles.body3, styles.bodyTypo]}
              >{`Don’t have an account? `}</Text>
            </View>
            <Button
              style={styles.signUp}
              title="Sign up."
              radius="5"
              iconPosition="left"
              type="clear"
              color="#eefbff"
              titleStyle={styles.signUpBtn}
              onPress={() => navigation.navigate("SignUp")}
              containerStyle={styles.signUpBtn1}
              buttonStyle={styles.signUpBtn2}
            />
            <View style={styles.frameInner} />
          </Pressable>
        </View>
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  signUpBtn: {
    color: "#eefbff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Outfit-Bold",
  },
  signUpBtn1: {
    position: "relative",
  },
  signUpBtn2: {},
  logInBg: {
    backgroundColor: Color.darkBG,
    height: 844,
  },
  bodyTypo1: {
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    color: Color.white,
  },
  frameLayout: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.colorGray,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    height: 62,
    width: 330,
    borderRadius: Border.br_3xs,
    fontFamily: FontFamily.openSansRegular,
  },
  bodyTypo: {
    fontFamily: FontFamily.outfitLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    lineHeight: 29,
    color: Color.white,
    flex: 1,
  },
  welcome: {
    fontSize: FontSize.size_13xl,
    lineHeight: 36,
    fontFamily: FontFamily.josefinSansBold,
    textAlign: "left",
    color: Color.white,
    fontWeight: "700",
    flex: 1,
  },
  text: {
    width: 183,
    flexDirection: "row",
  },
  body: {
    fontSize: FontSize.size_xl,
    lineHeight: 29,
    fontFamily: FontFamily.openSansRegular,
    flex: 1,
  },
  text1: {
    width: 136,
    marginTop: 10,
    flexDirection: "row",
  },
  textParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    alignSelf: "stretch",
  },
  frameChild: {
    fontSize: FontSize.size_base,
  },
  frameItem: {
    fontSize: FontSize.size_base,
    marginTop: 10,
  },
  body1: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  text2: {
    flexDirection: "row",
  },
  textWrapper: {
    backgroundColor: Color.colorSkyblue,
    alignItems: "center",
    padding: Padding.p_3xs,
    justifyContent: "center",
    height: 62,
    borderRadius: Border.br_3xs,
    width: 330,
    marginTop: 10,
  },
  frameGroup: {
    marginTop: 20,
  },
  forgotPassword1: {
    fontFamily: FontFamily.outfitBold,
    color: Color.colorAliceblue,
    height: 29,
    fontSize: FontSize.size_base,
    width: 330,
    lineHeight: 29,
    textAlign: "left",
    fontWeight: "700",
  },
  forgotPassword: {
    marginTop: 20,
  },
  body2: {
    textAlign: "center",
  },
  text3: {
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  body3: {
    textAlign: "left",
  },
  text4: {
    width: 230,
    height: 25,
    marginTop: 20,
    flexDirection: "row",
  },
  signUp: {
    marginTop: 20,
  },
  frameInner: {
    marginTop: 20,
  },
  pageContainerInner: {
    alignSelf: "stretch",
  },
  pageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 390,
    padding: Padding.p_11xl,
  },
  logIn: {
    width: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.darkBG,
    height: 844,
  },
});
}
export default LogIn;
