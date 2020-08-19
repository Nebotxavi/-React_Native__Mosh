import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "../components/listItem/ListItem";
import AppScreen from "../components/appScreen/AppScreen";
import colors from "../config/colors";
import IconItem from "../components/iconItem/IconItem";
import ListItemSeparator from "../components/listItemSeparator/ListItemSeparator";

const userData = {
  title: "Mosh Hamedani",
  description: "programmingwithmosh@gmail.com",
  image: require("../assets/mosh.jpg"),
};

const logOut = {
  title: "Log Out",
  icon: <IconItem name="logout" backgroundColor={colors.yellow} />,
};

const options = [
  {
    id: 1,
    title: "My Listings",
    icon: <IconItem name="format-list-bulleted" backgroundColor={colors.primary} />,
  },
  {
    id: 2,
    title: "My Messages",
    icon: <IconItem name="email" backgroundColor={colors.secondary} />,
  },
];

function MyAccountScreen(props) {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <ListItem title={userData.title} subTitle={userData.description} image={userData.image} />
      </View>
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={options}
          keyExtractor={(options) => options.id.toString()}
          renderItem={({ item }) => <ListItem title={item.title} Icon={item.icon} />}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>

      <View style={styles.container}>
        <ListItem title={logOut.title} Icon={logOut.icon} />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
  flatList: {},
});

export default MyAccountScreen;
