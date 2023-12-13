import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText.ios";
import { ListItem } from "../components/lists";

function ListingDetailsScreen() {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale!</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/bibek.jpeg")}
          title="Bibek Rajbhandari"
          subTitle="5 Listings"
          showChevrons={true}
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
