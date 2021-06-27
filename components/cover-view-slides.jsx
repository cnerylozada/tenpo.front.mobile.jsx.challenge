import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { AppText } from "../_commons";

export const SlideOne = () => {
  return (
    <View style={styles.slideContainer}>
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
      <Image source={require("../assets/mobile.png")} style={styles.image} />
    </View>
  );
};

export const SlideTwo = () => {
  return (
    <View style={[styles.slideContainer]}>
      <Image source={require("../assets/tenpistas.png")} style={styles.image} />
      <View style={{ width: 140, marginLeft: 15 }}>
        <AppText weight="bold" size="sectionHeadline">
          Pide lo que quieras!
        </AppText>
        <AppText size="small">Todas tus comidas al alcance de un touch</AppText>
      </View>
    </View>
  );
};

export const SlideThree = () => {
  return (
    <View style={[styles.slideContainer]}>
      <View style={{ width: 140 }}>
        <AppText weight="bold" size="sectionHeadline">
          Servicio al cliente 24/7
        </AppText>
        <AppText size="small">De vez en cuando es bueno conversar.</AppText>
      </View>
      <Image
        source={require("../assets/callcenter.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 150,
    height: 150,
  },
});
