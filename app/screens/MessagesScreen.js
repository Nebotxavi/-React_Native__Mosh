import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ListItem from "../components/listItem/ListItem";
import AppScreen from "../components/appScreen/AppScreen";
import colors from "../config/colors";
import ListItemSeparator from "../components/listItemSeparator/ListItemSeparator";
import ListItemDeleteAction from "../components/listItemDeleteAction/ListItemDeleteAction";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3.1",
    description: "D3",
    image: require("../assets/mosh.jpg"),
  },
];
function MessagesScreen(props) {
  return (
    <AppScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </AppScreen>
  );
}

export default MessagesScreen;
