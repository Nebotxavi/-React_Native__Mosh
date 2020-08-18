import React from "react";
import { ImageBackground, Image, StyleSheet, Text, View } from "react-native";

import AppButton from "../components/appButton/AppButton";

export default function App() {
  return (
    <ImageBackground style={styles.background} blurRadius={2} source={require("../assets/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton color="primary" title="login" />
        <AppButton color="secondary" title="register" />
      </View>
      {/* <View style={[styles.button, styles.loginButton]}></View>
      <View style={[styles.button, styles.registerButton]}></View> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  // button: {
  //   width: "100%",
  //   height: 70,
  // },
  // loginButton: {
  //   backgroundColor: colors.primary,
  // },
  // registerButton: {
  //   backgroundColor: colors.secondary,
  // },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
});
