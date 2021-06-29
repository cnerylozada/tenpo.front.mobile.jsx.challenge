import React from "react";
import { StyleSheet, View } from "react-native";
import { customShadow, palette } from "../styles";

const AppTextarea = () => {
  return <View style={styles.container}></View>;
};
const styles = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 15,
    backgroundColor: palette.white,
    padding: 8,
    ...customShadow,
  },
});

export default AppTextarea;
