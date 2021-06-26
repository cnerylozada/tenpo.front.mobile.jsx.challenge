import React from "react";
import { StyleSheet, View } from "react-native";
import { palette } from "../styles";
import { AppText } from "../_commons";

const LoadingContent = ({ height = 90 }) => {
  return (
    <View style={[styles.container, { height: height }]}>
      <AppText color="gray">Cargando ...</AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: palette.light,
  },
});

export default LoadingContent;
