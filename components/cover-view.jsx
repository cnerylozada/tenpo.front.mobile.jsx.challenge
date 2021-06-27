import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { AppText } from "../_commons";

const CoverView = () => {
  return (
    <View style={styles.container}>
      <View>
        <AppText weight="bold" size="headline">
          Tenpo
        </AppText>
        <AppText weight="bold" color="green" size="headline">
          Eats
        </AppText>
        <AppText weight="bold" caps size="xsmall">
          deliver app
        </AppText>
      </View>
      <Image
        source={require("../assets/mobile.png")}
        style={{ width: 150, height: 150 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CoverView;
