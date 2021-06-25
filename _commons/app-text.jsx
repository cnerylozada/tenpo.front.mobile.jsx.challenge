import React from "react";
import { StyleSheet, Text } from "react-native";
import { fontSize } from "../styles";

const AppText = ({ children, size = "paragraph", weight, caps }) => {
  return (
    <Text
      style={{
        fontSize: fontSize[size],
        textTransform: !!caps ? "uppercase" : "none",
      }}
    >
      {children}
    </Text>
  );
};

export default AppText;
