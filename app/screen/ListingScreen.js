import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import AppCard from "../components/AppCard";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: "$100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: "$1000",
    image: require("../assets/couch.jpeg"),
  },
];

function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(cardItem) => cardItem.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});

export default ListingScreen;
