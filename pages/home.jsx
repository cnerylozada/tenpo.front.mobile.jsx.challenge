import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeView = () => {
  return (
    <View style={styles.container}>
      <Text>Home view !</Text>
      <Text>Home view !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
});

export default HomeView;
