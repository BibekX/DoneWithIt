import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import AppText from "./AppText.ios";
import colors from "../config/colors";

function AppButton({ title, color = "primary", onPress, style }) {
  return (
    <TouchableOpacity
      style={[style, styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <AppText style={styles.buttonText}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;
