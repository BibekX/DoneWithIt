import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Entypo } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";
import AppText from "../AppText.ios";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showChevrons,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={defaultStyles.colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <AppText numberOfLines={1} style={styles.title}>
              {title}
            </AppText>
            {subTitle && (
              <AppText numberOfLines={2} style={styles.subTitle}>
                {subTitle}
              </AppText>
            )}
          </View>
          {showChevrons && (
            <Entypo
              name="chevron-right"
              size={24}
              color={defaultStyles.colors.medium}
              style={styles.chevron}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: defaultStyles.colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 18,
    color: defaultStyles.colors.medium,
  },
  chevron: {
    marginLeft: "auto",
  },
});

export default ListItem;
