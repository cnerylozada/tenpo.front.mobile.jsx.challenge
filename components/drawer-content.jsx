import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { palette } from "../styles";
import { drawerItems } from "../utils";
import { AppText, DrawerItem } from "../_commons";

const DrawerContent = ({ navigation }) => {
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
        <View key={index} style={{ marginBottom: 25 }}>
          <DrawerItem item={_} navigation={navigation} />
        </View>
      ))}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 18,
    backgroundColor: palette.background,
  },
  userContainer: {
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
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
