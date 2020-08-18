// import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/appButton/AppButton";
import AppCard from "./app/components/appCard/AppCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
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
    <ViewImageScreen />
  );
}
