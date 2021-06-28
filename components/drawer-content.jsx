import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";
import { icons } from "../styles";
import { AppText, DrawerItem } from "../_commons";

const drawerItems = [
  { label: "inicio", icon: icons.home },
  { label: "mi cuenta", icon: icons.user },
  { label: "mis pedidos", icon: icons.menu },
];

const DrawerContent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userContainer}>
        <ImageBackground
          source={{
            uri: "https://media-exp1.licdn.com/dms/image/C5603AQEygHTw-H-ckg/profile-displayphoto-shrink_800_800/0/1598886780522?e=1630540800&v=beta&t=CeBPaFVi-XSbJa7WuPdRM75nJAUGHJaW22OuOy5Ocos",
          }}
          style={styles.userImage}
        />
        <AppText
          weight="bold"
          size="subHeadline"
          styles={{ width: 170, textAlign: "center" }}
        >
          Cristian Nery Lozada
        </AppText>
      </View>

      {drawerItems.map((_, index) => (
        <View key={index} style={{ marginBottom: 15 }}>
          <DrawerItem label={_.label} icon={_.icon} />
        </View>
      ))}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 18,
  },
  userContainer: {
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  userImage: {
    width: 100,
    height: 100,
    overflow: "hidden",
    borderRadius: 50,
    marginBottom: 8,
  },
});
export default DrawerContent;
