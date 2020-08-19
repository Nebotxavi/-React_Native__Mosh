import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import colors from "../../config/colors";

import AppText from "../appText/AppText";

function AppCard({ title = "testing", subTitle = "subtesting", image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    padding: 10,
  },
  title: { marginBottom: 10 },
  subTitle: { color: colors.secondary, fontWeight: "bold" },
});

export default AppCard;
