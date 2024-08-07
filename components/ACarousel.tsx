import React from "react";
import { FlashList } from "@shopify/flash-list";
import CardView from "./CardView";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "Fourth Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "Fourth Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "Fourth Item",
  },
];

export default function MyList() {
  return (
    <FlashList
      data={DATA}
      renderItem={({  }) => <CardView></CardView>}
      estimatedItemSize={200}
      snapToOffsets={[...Array(DATA.length)].map(
        (x, i) => i * (width * 0.5 -40) + (i - 1) * 40,
      )}
      horizontal
      snapToAlignment="start"
      scrollEventThrottle={16}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      style={{ flex: 1 , marginTop: 50, height: height * 0.5, width: width}}
    />
  );
};