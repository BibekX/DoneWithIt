import React from "react";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import WelcomeScreen from "./app/screen/WelcomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import ListingScreen from "./app/screen/ListingScreen";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen";
import MessagesScreen from "./app/screen/MessagesScreen";
import MyAccountScreen from "./app/screen/MyAccountScreen";
import LoginScreen from "./app/screen/LoginScreen";
import ListingEditScreen from "./app/screen/ListingEditScreen";
import defaultStyles from "./app/config/styles";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <WelcomeScreen /> */}
        {/* <ViewImageScreen /> */}
        {/* <ListingScreen /> */}
        {/* <ListingDetailsScreen /> */}
        {/* <MessagesScreen /> */}
        {/* <MyAccountScreen /> */}
        {/* <LoginScreen type="register" /> */}
        <ListingEditScreen />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors.light,
  },
});
