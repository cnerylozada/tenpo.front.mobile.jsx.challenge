import React from "react";
import { StyleSheet, View } from "react-native";
import { icons, palette } from "../styles";
import { AppText, Icon } from "../_commons";

const DeliveryAddressView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainTitle}>
        <Icon name={icons.map} color="green" />
        <AppText color="green">Agregar direccion de entrega</AppText>
      </View>
      <View style={{ height: 250, backgroundColor: palette.yellow }}></View>
      <View style={styles.detailContainer}></View>
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
  detailContainer: {
    backgroundColor: palette.white,
    flex: 1,
  },
});

export default DeliveryAddressView;
