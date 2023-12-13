import React from "react";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";

import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.logoText}>Sell What You Don't Need</Text>
      </View>
      <AppButton color="primary">Login</AppButton>
      <AppButton color="secondary">Register</AppButton>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
