import React from "react";
import { View, StyleSheet } from "react-native";
import IconItem from "../iconItem/IconItem";
import AppText from "../appText/AppText";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <IconItem backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 15,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
