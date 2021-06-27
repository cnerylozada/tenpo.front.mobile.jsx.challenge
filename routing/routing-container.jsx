import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HomeView, AccountView } from "../views";

const { Navigator, Screen } = createDrawerNavigator();

const RoutingContainer = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="home">
        <Screen name="account" component={AccountView} />
        <Screen name="home" component={HomeView} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RoutingContainer;
