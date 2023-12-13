import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, width, ...otherProps }) {
  return (
    <View style={[styles.container, { width: width || "100%" }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[defaultStyles.text, styles.textInput]}
        {...otherProps}
        placeholderTextColor={defaultStyles.colors.medium}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    height: 55,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    margin: 15,
    marginRight: 5,
  },
  textInput: {
    flex: 1,
    marginLeft: 15,
  },
});

export default AppTextInput;
