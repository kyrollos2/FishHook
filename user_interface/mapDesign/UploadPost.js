import * as React from "react";
import { ScrollView, StyleSheet, View, Text, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const UploadPost = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.uploadPost}
      locations={[0, 1]}
      colors={["#2089b6", "#000a41"]}
    >
      <ScrollView
        style={styles.scrollview}
        horizontal={false}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
      >
        <View style={styles.uploadPostChild} />
        <View style={[styles.uploadPostItem, styles.uploadLayout]} />
        <View style={[styles.uploadPostInner, styles.uploadLayout]} />
        <Text style={[styles.chooseFromCamera, styles.uploadPhotoTypo]}>
          Choose from Camera Roll
        </Text>
        <View style={[styles.rectangleView, styles.uploadLayout]} />
        <Button
          radius={5}
          iconPosition="left"
          type="solid"
          containerStyle={styles.rectangleButtonBtn}
          buttonStyle={styles.rectangleButtonBtn1}
        />
        <Text
          style={[styles.species, styles.speciesPosition]}
        >{`Species: `}</Text>
        <TextInput
          style={[styles.textHere, styles.speciesPosition1]}
          placeholder="Text Here"
          placeholderTextColor="#000"
        />
        <Button
          radius={5}
          iconPosition="left"
          type="solid"
          containerStyle={styles.rectangleButton1Btn}
          buttonStyle={styles.rectangleButton1Btn1}
        />
        <Button
          title="Cancel"
          radius="5"
          iconPosition="left"
          type="clear"
          color="#000"
          titleStyle={styles.cancelBtn}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "HomeScreen" })
          }
          containerStyle={styles.cancelBtn1}
          buttonStyle={styles.cancelBtn2}
        />
        <Button
          title="Upload"
          radius="5"
          iconPosition="left"
          type="clear"
          color="#000"
          titleStyle={styles.uploadBtn}
          containerStyle={styles.uploadBtn1}
          buttonStyle={styles.uploadBtn2}
        />
        <Text
          style={[styles.location, styles.locationPosition]}
        >{`Location: `}</Text>
        <TextInput
          style={[styles.textHere1, styles.locationPosition]}
          placeholder="Text Here"
          placeholderTextColor="#000"
        />
        <Text style={[styles.uploadPhoto, styles.uploadPhotoTypo]}>
          Upload Photo
        </Text>
        <Button
          radius="5"
          iconPosition="left"
          type="outline"
          color="rgba(128, 141, 208, 0.6)"
          containerStyle={styles.rectangleButton2Btn}
          buttonStyle={styles.rectangleButton2Btn1}
        />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rectangleButtonBtn: {
    left: 198,
    top: 737,
    position: "absolute",
  },
  rectangleButtonBtn1: {
    width: 176,
    height: 68,
  },
  rectangleButton1Btn: {
    left: 12,
    top: 738,
    position: "absolute",
  },
  rectangleButton1Btn1: {
    width: 181,
    height: 68,
  },
  cancelBtn: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Inter-Regular",
  },
  cancelBtn1: {
    left: 40,
    top: 754,
    position: "absolute",
  },
  cancelBtn2: {},
  uploadBtn: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Inter-Regular",
  },
  uploadBtn1: {
    left: 216,
    top: 754,
    position: "absolute",
  },
  uploadBtn2: {},
  rectangleButton2Btn: {
    left: 76,
    top: 265,
    position: "absolute",
  },
  rectangleButton2Btn1: {
    width: 242,
    height: 56,
  },
  uploadLayout: {
    width: 363,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  uploadPhotoTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    position: "absolute",
  },
  speciesPosition: {
    left: 22,
    color: Color.colorBlack,
  },
  speciesPosition1: {
    top: 618,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  locationPosition: {
    top: 72,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  uploadPostChild: {
    top: -77,
    left: 102,
    alignItems: "flex-end",
    position: "absolute",
  },
  uploadPostItem: {
    top: 60,
    height: 47,
    alignSelf: "center",
    left: 12,
    backgroundColor: Color.colorGainsboro_100,
  },
  uploadPostInner: {
    top: 185,
    height: 331,
    left: 12,
    backgroundColor: Color.colorGainsboro_100,
  },
  chooseFromCamera: {
    top: 281,
    left: 78,
    width: 239,
    height: 55,
    textAlign: "center",
  },
  rectangleView: {
    top: 600,
    left: 16,
    height: 60,
  },
  species: {
    width: 88,
    height: 33,
    top: 618,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
    textAlign: "center",
  },
  textHere: {
    left: 106,
  },
  location: {
    textAlign: "left",
    width: 70,
    height: 28,
    left: 22,
    color: Color.colorBlack,
  },
  textHere1: {
    left: 96,
  },
  uploadPhoto: {
    top: 235,
    left: 87,
    width: 219,
    height: 36,
    textAlign: "center",
  },
  scrollview: {
    flex: 1,
    overflow: "hidden",
    maxWidth: "100%",
    backgroundColor: Color.darkBG,
    width: "100%",
  },
  uploadPost: {
    width: "100%",
  },
});

export default UploadPost;
