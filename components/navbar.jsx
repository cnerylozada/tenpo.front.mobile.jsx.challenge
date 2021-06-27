import React from "react";
import { StyleSheet, View } from "react-native";
import { icons } from "../styles";
import { Icon } from "../_commons";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Icon name={icons.check} size="large" color="green" />
      <Icon name={icons.search} size="large" color="green" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
});

export default Navbar;
