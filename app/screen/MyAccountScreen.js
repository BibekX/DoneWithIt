import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Icon from "../components/Icon";
import colors from "../config/colors";
import { ListItem, ListItemSeparator } from "../components/lists";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function MyAccountScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="Bibek Rajbhandari"
          subTitle="bib.rajbhandari@gmail.com"
          image={require("../assets/bibek.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={
          <Icon
            name="logout"
            iconColor={colors.white}
            backgroundColor="#ffe66d"
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default MyAccountScreen;
