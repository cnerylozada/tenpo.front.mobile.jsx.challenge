import React from "react";
import { StyleSheet, View, ScrollView, Dimensions, Text } from "react-native";
import { SlideOne, SlideThree, SlideTwo } from "./cover-view-slides";

const { width } = Dimensions.get("window");
const height = width * 0.4;
const slides = [<SlideOne />, <SlideTwo />, <SlideThree />];

const CoverView = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={{ width, height }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {slides.map((_, index) => (
          <View key={index} style={styles.slides}>
            {_}
          </View>
        ))}
      </ScrollView>
      <View style={styles.slideItem}>
        {new Array(slides.length).fill(null).map((_) => (
          <Text style={{ marginLeft: 1.5 }}>⬤</Text>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  slides: {
    width,
    height,
  },
  slideItem: {
    position: "absolute",
    bottom: 3,
    right: 9,
    flexDirection: "row",
  },
});

export default CoverView;
