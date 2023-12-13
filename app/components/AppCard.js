import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import AppText from "./AppText.ios";
import colors from "../config/colors";

function AppCard({ image, title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginVertical: 10,
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  detailsContainer: {
    marginVertical: 20,
    marginHorizontal: 15,
  },
  title: {
    marginBottom: 10,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default AppCard;
