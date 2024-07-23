// AppCarousel.tsx
import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Dimensions, SafeAreaView } from 'react-native';
import CarouselCard from './CardCarousel';

const { width } = Dimensions.get('window');
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

interface CarouselItem {
  id: string;
  title: string;
  uri: string;
}

const CAROUSEL_ITEMS = [
  { id: '1', title: 'Item 1', uri: 'https://picsum.photos/200/300' },
  { id: '2', title: 'Item 2', uri: 'https://picsum.photos/200/300' },
  { id: '3', title: 'Item 3', uri: 'https://picsum.photos/200/300' },
  { id: '4', title: 'Item 4', uri: 'https://picsum.photos/200/300' },
  { id: '5', title: 'Item 5', uri: 'https://picsum.photos/200/300' },
];

export default function AppCarousel() {
  const flatListRef = useRef<FlatList<CarouselItem> | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onViewRef = useRef(({ changed }: { changed: any }) => {
    setCurrentIndex(changed[0].index);
  });

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index: index });
  };

  const renderItem = ({ item }: { item: CarouselItem }) => {
    return (
      <View style={styles.cardContainer}>
        <CarouselCard />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <FlatList
        style={styles.carousel}
        data={CAROUSEL_ITEMS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={(ref) => {
          flatListRef.current = ref;
        }}
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef.current}
      />
      <View style={styles.dotView}>
        {CAROUSEL_ITEMS.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.cycle, { backgroundColor: index === currentIndex ? 'black' : 'gray' }]}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  carousel: {
    maxHeight: 300,
  },
  cardContainer: {
    width: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  cycle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginHorizontal: 5,
    backgroundColor: 'gray',
  },
});
