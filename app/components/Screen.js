import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, View, StyleSheet } from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={[style, styles.container]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default Screen;
