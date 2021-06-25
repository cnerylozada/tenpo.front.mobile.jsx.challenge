import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { palette } from "../styles";
import AppText from "../_commons/app-text";

const HomeView = () => {
  return (
    <View style={styles.container}>
      <AppText size="small" weight="light">
        Home view !
      </AppText>
      <AppText>Home view !</AppText>
      <AppText size="subHeadline" weight="bold">
        Home view !
      </AppText>
      <AppText size="sectionHeadline">Abcdefghi !</AppText>
      <AppText size="headline" caps weight="regular">
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
