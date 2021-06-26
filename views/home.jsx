import React from "react";
import { StyleSheet, View } from "react-native";
import { Categories, Favorites } from "../components";
import { palette } from "../styles";

const HomeView = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 40 }}>
        <Categories />
      </View>
      <View style={{ marginBottom: 40 }}>
        <Favorites />
      </View>
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
