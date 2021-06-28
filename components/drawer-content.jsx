import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";
import { AppText } from "../_commons";

const DrawerContent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: "center",
          width: "100%",
        }}
      >
        <ImageBackground
          source={{
            uri: "https://media-exp1.licdn.com/dms/image/C5603AQEygHTw-H-ckg/profile-displayphoto-shrink_800_800/0/1598886780522?e=1630540800&v=beta&t=CeBPaFVi-XSbJa7WuPdRM75nJAUGHJaW22OuOy5Ocos",
          }}
          style={styles.userImage}
        />
        <AppText styles={{ width: 100, textAlign: "center" }}>
          Cristian Nery Lozada
        </AppText>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
