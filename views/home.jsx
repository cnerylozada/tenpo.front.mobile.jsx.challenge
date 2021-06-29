import React, { useContext } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../auth";
import {
  Categories,
  CoverView,
  Favorites,
  Navbar,
  Restaurants,
} from "../components";
import { icons, palette } from "../styles";
import { routes } from "../utils";
import { AppText, Icon } from "../_commons";

const HomeView = ({ navigation }) => {
  const {
    user: { names, surnames },
  } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Navbar navigation={navigation} userData={{ names, surnames }} />
        <CoverView />
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.deliveryAddress)}
          >
            <View style={styles.searchBtn}>
              <Icon name={icons.map} color="green" />
              <AppText color="green">Agregar dirección de entrega</AppText>
            </View>
          </TouchableOpacity>
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
