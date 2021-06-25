import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { iconSize } from "../styles";

const Icon = ({ name, size = "regular" }) => {
  return (
    <MaterialCommunityIcons name={name} size={iconSize[size]} color="black" />
  );
};

export default Icon;
