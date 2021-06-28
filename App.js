import React, { useState } from "react";
import { Platform, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { RoutingContainer } from "./routing";
import { AuthContext } from "./auth";
import { useEffect } from "react/cjs/react.development";
import { getUserInfo } from "./services";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
  });
  const [user, setUser] = useState();

  useEffect(() => {
    getUserInfo().then((_) => setUser(_));
  }, []);

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
