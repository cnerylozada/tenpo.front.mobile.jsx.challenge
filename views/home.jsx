import React from "react";
import { StyleSheet, View } from "react-native";
import { Categories, Favorites, Restaurants } from "../components";
import { palette } from "../styles";

const HomeView = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 50 }}>
        <Restaurants />
      </View>
      <View></View>
      <View style={{ marginBottom: 50 }}>
        <Categories />
      </View>
      <View>
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
