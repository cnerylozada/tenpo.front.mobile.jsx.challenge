import React from "react";
import { StyleSheet, View } from "react-native";
import { palette } from "../styles";
import { getAvatarName } from "../utils";
import AppText from "./app-text";

const Avatar = ({ color = "yellow", userData }) => {
  return (
    <View style={[styles.container, { backgroundColor: palette[color] }]}>
      <AppText caps>{getAvatarName(userData)}</AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
});

export default Avatar;
