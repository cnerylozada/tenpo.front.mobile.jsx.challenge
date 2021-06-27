import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Categories, CoverView, Favorites, Restaurants } from "../components";
import { icons, palette } from "../styles";
import { AppText, Icon } from "../_commons";

const HomeView = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: 40, backgroundColor: "yellow" }}>
        <AppText>navbar</AppText>
      </View>
      <View>
        <CoverView />
      </View>
      <View style={styles.content}>
        <View style={styles.searchBtn}>
          <Icon name={icons.map} color="green" />
          <AppText color="green">Agregar direccion de entrega</AppText>
        </View>
        <View style={styles.mealsContainer}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: palette.cyan,
  },
  searchBtn: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  mealsContainer: {
    flex: 1,
    backgroundColor: palette.white,
    paddingTop: 30,
    paddingHorizontal: 18,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default HomeView;
