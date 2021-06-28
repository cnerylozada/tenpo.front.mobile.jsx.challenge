import React from "react";
import { Platform, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { RoutingContainer } from "./routing";
import { AuthContext } from "./auth";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
  });
  const user = { name: "cristian" };

  if (!fontsLoaded) return null;
  return (
    <SafeAreaView style={styles.container}>
      <AuthContext.Provider value={{ user }}>
        <RoutingContainer />
      </AuthContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
