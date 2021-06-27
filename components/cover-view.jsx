import React from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import { SlideOne, SlideThree, SlideTwo } from "./cover-view-slides";

const { width } = Dimensions.get("window");
const height = width * 0.4;
const x = [<SlideOne />, <SlideTwo />, <SlideThree />];

const CoverView = () => {
  return (
    <ScrollView
      horizontal
      style={{ width, height }}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    >
      {x.map((_, index) => (
        <View key={index} style={styles.container}>
          {_}
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
});

export default CoverView;
