import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { palette, customShadow } from "../styles";
import AppText from "./app-text";

const AppButton = ({ label }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log("on press...")}
    >
      <AppText
        caps
        color="white"
        size="small"
        weight="bold"
        styles={{ textAlign: "center" }}
      >
        {label}
      </AppText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.green,
    padding: 15,
    borderRadius: 8,
    ...customShadow,
  },
});

export default AppButton;
