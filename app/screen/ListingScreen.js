import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import AppCard from "../components/AppCard";

function ListingScreen() {
  return (
    <SafeAreaView style={styles.cardContainer}>
      <AppCard
        title="Red jacket for sale!"
        subTitle="$100"
        image={require("../assets/jacket.jpg")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 120,
    alignItems: "center",
  },
});

export default ListingScreen;
