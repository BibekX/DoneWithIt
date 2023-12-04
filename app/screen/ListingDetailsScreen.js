import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText.ios";
import ListItems from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale!</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItems
          image={require("../assets/bibek.jpeg")}
          title="Bibek Rajbhandari"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    marginVertical: 20,
    marginHorizontal: 15,
  },
  userContainer: {
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
