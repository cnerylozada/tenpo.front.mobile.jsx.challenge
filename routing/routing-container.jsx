import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AccountView } from "../views";
import { routes } from "../utils";
import DrawerContent from "./drawer-content";
import DeliveryStack from "./delivery-stack";

const { Navigator, Screen } = createDrawerNavigator();

const RoutingContainer = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={routes.home}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Screen name={routes.home} component={DeliveryStack} />
        <Screen name={routes.account} component={AccountView} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RoutingContainer;
