import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";
import { AuthContext } from "../auth";
import { palette } from "../styles";
import { drawerItems } from "../utils";
import { AppText, DrawerItem } from "../_commons";
import LoadingContent from "./loading-content";

const DrawerContent = ({ navigation }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <LoadingContent height="100%" />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userContainer}>
        <ImageBackground
          source={{
            uri: user.imageUrl,
          }}
          style={styles.userImage}
        />
        <AppText
          weight="bold"
          size="subHeadline"
          styles={{
            width: 170,
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          {user.names} {user.surnames}
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
