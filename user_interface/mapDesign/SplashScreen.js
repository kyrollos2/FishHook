import * as React from "react";
import { Button } from "@rneui/themed";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.splashScreen}
      locations={[0, 1]}
      colors={["#000a41", "#2089b6"]}
    >
      <Button
        title="Continue"
        radius={5}
        iconPosition="left"
        type="solid"
        color="#18b6d9"
        titleStyle={styles.frameButtonBtn}
        onPress={() => navigation.navigate("LogIn")}
        containerStyle={styles.frameButtonBtn1}
        buttonStyle={styles.frameButtonBtn2}
      />
      <Text style={styles.allThingsFishingContainer}>
        <Text style={styles.allThingsFishing}>All Things Fishing In One</Text>
        <Text style={styles.text}>{` `}</Text>
      </Text>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo.png")}
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
    top: 688,
    position: "absolute",
  },
  frameButtonBtn2: {
    borderRadius: 10,
    width: 330,
    height: 62,
  },
  allThingsFishing: {
    fontFamily: FontFamily.josefinSansRegular,
    color: "#1f2554",
  },
  text: {
    fontFamily: FontFamily.paprikaRegular,
    color: "#eefbff",
  },
  allThingsFishingContainer: {
    top: 422,
    left: 30,
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    width: 330,
    height: 29,
    position: "absolute",
  },
  logoIcon: {
    top: 172,
    left: 43,
    borderRadius: 125,
    width: 304,
    height: 250,
    position: "absolute",
  },
  splashScreen: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.darkBG,
  },
});

export default SplashScreen;
