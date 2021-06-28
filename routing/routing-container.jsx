import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HomeView, AccountView } from "../views";
import { routes } from "../utils";
import { Icon } from "../_commons";
import { icons } from "../styles";
import { DrawerContent } from "../components";

const { Navigator, Screen } = createDrawerNavigator();

const RoutingContainer = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={routes.home}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Screen
          name={routes.home}
          component={HomeView}
          options={{
            title: "Home",
            drawerIcon: () => <Icon name={icons.home} />,
          }}
        />
        <Screen
          name={routes.account}
          component={AccountView}
          options={{
            title: "Account",
            drawerIcon: () => <Icon name={icons.user} />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default RoutingContainer;
