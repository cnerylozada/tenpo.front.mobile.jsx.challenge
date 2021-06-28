import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./app-text";
import Icon from "./icon";

const DrawerItem = ({ icon, label }) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} />
      <AppText styles={{ marginLeft: 20, textTransform: "capitalize" }}>
        {label}
      </AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default DrawerItem;
