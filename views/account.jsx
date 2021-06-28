import React, { useContext } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../auth";
import { palette } from "../styles";
import { AppText } from "../_commons";

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
      <View style={{ marginTop: 20 }}>
        <AppText weight="bold" size="subHeadline">
          Mis datos
        </AppText>
        <View style={styles.userDataContainer}>
          <InputMock label="Nombres" value={user.names} />
          <InputMock label="Apellidos" value={user.surnames} />
          <InputMock label="Apodo" value={user.nickname} />
        </View>
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
