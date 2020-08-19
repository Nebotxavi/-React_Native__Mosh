import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import AppScreen from "../components/appScreen/AppScreen";
import AppCard from "../components/appCard/AppCard";
import colors from "../config/colors";

const cards = [
  {
    id: 1,
    title: "Red jaque for sale",
    price: "100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: "1000",
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <AppScreen style={styles.screen}>
      <FlatList
        data={cards}
        keyExtractor={(cards) => cards.id.toString()}
        renderItem={({ item }) => <AppCard title={item.title} subTitle={`$${item.price}`} image={item.image} />}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 15,
  },
});

export default ListingsScreen;
