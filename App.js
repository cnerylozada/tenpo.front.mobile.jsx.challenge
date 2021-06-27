import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { RoutingContainer } from "./routing";
import { SplashView } from "./views";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  let [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
  });

  useEffect(() => {
    if (!!fontsLoaded) {
      setTimeout(() => {
        setShowSplash((_) => !_);
      }, 1500);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <SafeAreaView style={styles.container}>
      {showSplash ? <SplashView /> : <RoutingContainer />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
