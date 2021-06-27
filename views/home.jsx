import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Categories,
  CoverView,
  Favorites,
  Navbar,
  Restaurants,
} from "../components";
import { icons, palette } from "../styles";
import { AppText, Icon } from "../_commons";

const HomeView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Navbar navigation={navigation} />
        <CoverView />
        <View style={styles.content}>
          <View style={styles.searchBtn}>
            <Icon name={icons.map} color="green" />
            <AppText color="green">Agregar direccion de entrega</AppText>
          </View>
          <View style={styles.mealsContainer}>
            <View style={{ marginBottom: 50 }}>
              <Restaurants />
            </View>
            <View style={{ marginBottom: 50 }}>
              <Categories />
            </View>
            <View>
              <Favorites />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: palette.background,
  },
  content: {
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
    backgroundColor: palette.white,
    paddingTop: 30,
    paddingBottom: 25,
    paddingHorizontal: 18,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default HomeView;
