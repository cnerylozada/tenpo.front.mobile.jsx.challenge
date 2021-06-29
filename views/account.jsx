import React, { useContext } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import call from "react-native-phone-call";
import { AuthContext } from "../auth";
import { icons, palette } from "../styles";
import { AppText, Icon } from "../_commons";

const InputMock = ({ label, value }) => {
  return (
    <View
      style={{
        borderBottomWidth: 0.25,
        borderColor: palette.gray,
        paddingBottom: 8,
        marginBottom: 10,
      }}
    >
      <AppText size="small" color="gray">
        {label}
      </AppText>
      <AppText styles={{ textTransform: "capitalize" }}>{value}</AppText>
    </View>
  );
};

const AccountView = () => {
  const { user } = useContext(AuthContext);

  const triggerCall = () => {
    call({
      number: "+51974822213",
      prompt: true,
    }).catch(console.error);
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <ImageBackground
          source={{
            uri: user.imageUrl,
          }}
          style={styles.userImage}
        />
        <AppText
          size="subHeadline"
          weight="bold"
          styles={{ textTransform: "capitalize" }}
        >
          {user.names} {user.surnames}
        </AppText>
        <AppText color="gray">{user.email}</AppText>
      </View>
      <View style={{ marginVertical: 20 }}>
        <AppText weight="bold" size="subHeadline">
          Mis datos
        </AppText>
        <View style={styles.userDataContainer}>
          <InputMock label="Nombres" value={user.names} />
          <InputMock label="Apellidos" value={user.surnames} />
          <InputMock label="Apodo" value={user.nickname} />
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          onPress={() => {
            WebBrowser.openBrowserAsync(
              "https://www.linkedin.com/in/cristian-nery-027b70180/"
            );
          }}
        >
          <Icon name={icons.linkedin} size="large" color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={triggerCall}>
          <Icon name={icons.phone} size="large" color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: palette.background,
  },
  userImage: {
    width: 150,
    height: 150,
    overflow: "hidden",
    borderRadius: 100,
    marginBottom: 16,
  },
  userDataContainer: {
    marginTop: 10,
    padding: 18,
    backgroundColor: palette.white,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: palette.gray,
  },
});

export default AccountView;
