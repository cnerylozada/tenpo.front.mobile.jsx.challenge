import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import { icons, palette } from "../styles";
import { AppText, Icon } from "../_commons";

const DeliveryAddressView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainTitle}>
        <Icon name={icons.map} color="green" />
        <AppText color="green">Agregar dirección de entrega</AppText>
      </View>
      <MapView style={styles.map} />
      <View style={styles.detailContainer}>
        <AppText weight="bold">Agregar información de entrega</AppText>
        <AppText size="small" color="gray">
          Depto, Oficina, Piso, Block
        </AppText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.cyan,
  },
  mainTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 36,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.35,
  },
  detailContainer: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 18,
    backgroundColor: palette.white,
  },
});

export default DeliveryAddressView;
