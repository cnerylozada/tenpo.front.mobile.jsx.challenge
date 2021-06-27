import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { icons } from "../styles";
import { Avatar, Icon } from "../_commons";

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
        <Avatar />
      </TouchableWithoutFeedback>
      <Icon name={icons.search} size="large" color="green" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
});

export default Navbar;
