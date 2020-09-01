// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/appButton/AppButton";
import AppCard from "./app/components/appCard/AppCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import IconItem from "./app/components/iconItem/IconItem";
import colors from "./app/config/colors";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppScreen from "./app/components/appScreen/AppScreen";
import AppTextInput from "./app/components/appTextInput/AppTextInput";
import { Switch } from "react-native-gesture-handler";
import AppPicker from "./app/components/appPicker/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  return (
    <ListingEditScreen />
    // <View
    //   style={{
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <AppCard title="Red jaquet for sale!" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
    //   <AppCard title="The same jaquet!" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
    //   <AppCard title="Another jaquet!" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
    //   <AppCard title="The last jaquet!" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
    // </View>

    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <AppButton color="primary" title="LOGIN" onPress={() => console.log("Tapped")} />
    // </View>

    // <ListingDetailsScreen />

    // <ViewImageScreen />

    // <MessagesScreen />

    // <MyAccountScreen />
    // <ListingsScreen />

    // <AppScreen>
    //   <TextInput
    //     style={{
    //       borderBottomColor: "#ccc",
    //       borderBottomWidth: 1,
    //     }}
    //     placeholder="First Name"
    //     onChangeText={(text) => setFirstName(text)}
    //     maxLength={10}
    //     keyboardType="numeric"
    //     clearButtonMode="always"
    //     // secureTextEntry // it is boolean so no need to set a value
    //   />
    // </AppScreen>
    // <AppScreen>
    //   <AppPicker items={categories} icon="apps" placeholder="Category" selectedItem={category} onSelectItem={(item) => setCategory(item)} />
    //   <AppTextInput icon="email" placeholder="Email" />
    // </AppScreen>
  );
}
