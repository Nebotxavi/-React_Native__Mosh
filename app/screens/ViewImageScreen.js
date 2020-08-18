import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="close" size={35} color={colors.white} style={styles.closeIcon} />
      <MaterialCommunityIcons name="trash-can-outline" size={35} color={colors.white} style={styles.deleteIcon} />
      <Image resizeMode="contain" style={styles.image} source={require("../assets/chair.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    top: 25,
    left: 25,
  },
  deleteIcon: {
    position: "absolute",
    top: 25,
    right: 25,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
