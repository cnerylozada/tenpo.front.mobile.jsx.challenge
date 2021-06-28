import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "../utils";
import { DeliveryAddressView, HomeView } from "../views";

const { Navigator, Screen } = createStackNavigator();

const DeliveryStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={routes.home} component={HomeView} />
      <Screen name={routes.deliveryAddress} component={DeliveryAddressView} />
    </Navigator>
  );
};

export default DeliveryStack;
