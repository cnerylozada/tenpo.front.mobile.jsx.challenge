import { icons } from "../styles";

export const getFontFamilyByWeight = (weight) => {
  let fontFamily;
  switch (weight) {
    case "bold":
      fontFamily = "Lato_700Bold";
      break;
    case "regular":
      fontFamily = "Lato_400Regular";
      break;
    case "light":
      fontFamily = "Lato_300Light";
      break;
  }
  return fontFamily;
};

export const routes = {
  home: "home",
  deliveryAddress: "delivery-address",
  account: "account",
};

export const drawerItems = [
  { label: "inicio", icon: icons.home, route: routes.home },
  { label: "mi cuenta", icon: icons.user, route: routes.account },
  { label: "mis pedidos", icon: icons.list, route: routes.account },
  { label: "mis favoritos", icon: icons.star, route: routes.account },
  { label: "ayuda en linea", icon: icons.headphones, route: routes.account },
  { label: "logout", icon: icons.logout, route: routes.account },
];
