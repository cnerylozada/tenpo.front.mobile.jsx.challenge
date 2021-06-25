import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { palette } from "../styles";

const HomeView = () => {
  return (
    <View style={styles.container}>
      <Text>Home view !</Text>
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
