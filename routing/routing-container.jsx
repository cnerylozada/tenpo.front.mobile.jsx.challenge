import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HomeView, AccountView } from "../views";
import { routes } from "../utils";
import { DrawerContent } from "../components";

const { Navigator, Screen } = createDrawerNavigator();

const RoutingContainer = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={routes.home}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Screen name={routes.home} component={HomeView} />
        <Screen name={routes.account} component={AccountView} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RoutingContainer;
