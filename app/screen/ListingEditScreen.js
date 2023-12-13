import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ title: "", price: "", description: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {/* Title */}
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={255}
          name="title"
          placeholder="Title"
        ></AppFormField>
        {/* Price */}
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={"30%"}
        ></AppFormField>
        {/* Category */}
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        {/* Description */}
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        ></AppFormField>
        {/* Submit */}
        <SubmitButton title="Post" style={styles.button} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  button: { marginTop: 10 },
});

export default ListingEditScreen;
