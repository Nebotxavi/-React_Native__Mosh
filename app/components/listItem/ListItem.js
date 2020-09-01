import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../appText/AppText";
import colors from "../../config/colors";

function ListItem({ title, subTitle, image, Icon, onPress, renderRightActions, showChevrons }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {image && <Image style={styles.image} source={image} />}
          {Icon}
          <View style={styles.textContainer}>
            {title && (
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
            )}
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={3}>
                {subTitle}
              </AppText>
            )}
          </View>
          {showChevrons && <MaterialCommunityIcons name="chevron-right" size={20} color={colors.medium} />}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: "700",
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
