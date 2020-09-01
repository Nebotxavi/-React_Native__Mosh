import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppScreen from "../components/appScreen/AppScreen";

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../components/forms";
import CategoryPickerItem from "../components/categoryPickerItem/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  { label: "Furniture", value: 1, icon: "floor-lamp", backgroundColor: "#fc5c65" },
  { label: "Cars", value: 2, icon: "car", backgroundColor: "#fd9644" },
  { label: "Cameras", value: 3, icon: "camera", backgroundColor: "#fed330" },
  { label: "Games", value: 4, icon: "cards", backgroundColor: "#26de81" },
  { label: "Clothing", value: 5, icon: "shoe-heel", backgroundColor: "#2bcbba" },
  { label: "Sports", value: 6, icon: "basketball", backgroundColor: "#45aaf2" },
  { label: "Movies & Music", value: 7, icon: "headphones", backgroundColor: "#4b7bec" },
];

function ListingEditScreen(props) {
  return (
    <AppScreen style={styles.container}>
      <AppForm
        initialValues={{ title: "", price: "", category: null, description: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} autoCapitalize="none" autoCorrect={false} name="title" placeholder="Title" />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width={130}
        />
        <AppFormField
          maxLength={255}
          multiline
          numberOfLines={3}
          autoCapitalize="none"
          autoCorrect={false}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default ListingEditScreen;
