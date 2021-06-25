import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { palette } from "../styles";
import AppText from "../_commons/app-text";

const HomeView = () => {
  return (
    <View style={styles.container}>
      <AppText size="subHeadline" weight="bold">
        Home view !
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
});

export default HomeView;
