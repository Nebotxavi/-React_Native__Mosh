import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

function IconItem({ name, backgroundColor = "black", size = 45, iconColor = "white" }) {
  return (
    <View style={[styles.container, { backgroundColor, width: size, height: size, borderRadius: size / 2 }]}>
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconItem;
