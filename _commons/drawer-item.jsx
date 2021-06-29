import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "./app-text";
import Icon from "./icon";

const DrawerItem = ({ item, navigation }) => {
  const { icon, label, route, isBlocked } = item;
  return (
    <TouchableOpacity
      onPress={() => (!!isBlocked ? null : navigation.navigate(route))}
    >
      <View style={styles.container}>
        <Icon name={icon} color={!!isBlocked ? "gray" : "black"} />
        <AppText
          color={!!isBlocked ? "gray" : "black"}
          styles={{ marginLeft: 20, textTransform: "capitalize" }}
        >
          {label}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default DrawerItem;
