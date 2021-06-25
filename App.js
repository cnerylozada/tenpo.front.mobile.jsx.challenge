import React from "react";
import { Platform, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { HomeView } from "./pages";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
