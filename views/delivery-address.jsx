import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import { icons, palette } from "../styles";
import { AppButton, AppInput, AppText, Icon } from "../_commons";
import { LoadingContent } from "../components";

const DeliveryAddressView = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({});
    setLocation((_) => ({ latitude, longitude }));
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainTitle}>
        <Icon name={icons.map} color="green" />
        <AppText color="green">Agregar dirección de entrega</AppText>
        <View style={styles.inputContainer}>
          <AppInput />
        </View>
      </View>
      {!location ? (
        <LoadingContent height={250} />
      ) : (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
        </MapView>
      )}
      <View style={styles.detailContainer}>
        <AppText weight="bold">Agregar información de entrega</AppText>
        <AppText size="small" color="gray">
          Depto, Oficina, Piso, Block
        </AppText>
        <AppButton label="agregar dirección" />
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
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 36,
  },
  inputContainer: {
    position: "absolute",
    bottom: -20,
    width: "100%",
    zIndex: 100,
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
