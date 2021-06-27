import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { palette } from "../styles";
import { AppText } from "../_commons";

const SplashView = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 5 }}>
        <Image
          source={require("../assets/tenpo-logo.png")}
          style={styles.image}
        />
      </View>

      <AppText caps color="gray" size="small">
        deliver app
      </AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: palette.background,
  },
  image: {
    width: 120,
    height: 50,
  },
});

export default SplashView;
