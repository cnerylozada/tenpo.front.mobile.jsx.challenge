import React from "react";
import { StyleSheet, View } from "react-native";
import { palette } from "../styles";
import { AppText } from "../_commons";

const LoadingContent = () => {
  return (
    <View style={styles.container}>
      <AppText color="gray">Cargando ...</AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: palette.light,
  },
});

export default LoadingContent;
