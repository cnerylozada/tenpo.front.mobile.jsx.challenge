import React from "react";
import { StyleSheet, View } from "react-native";
import { Categories } from "../components";
import { palette } from "../styles";

const HomeView = () => {
  return (
    <View style={styles.container}>
      <Categories />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
    paddingHorizontal: 18,
  },
});

export default HomeView;
