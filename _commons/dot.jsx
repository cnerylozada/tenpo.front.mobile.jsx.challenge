import React from "react";
import { StyleSheet, View } from "react-native";
import { palette } from "../styles";

const Dot = ({ isActive }) => {
  return <View style={styles.container}></View>;
};
const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderColor: palette.green,
    borderWidth: 1,
    borderRadius: 20,
  },
});

export default Dot;
