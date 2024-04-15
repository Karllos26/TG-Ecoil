
import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList, Dimensions, SafeAreaView } from 'react-native';
import CardView from './CardView';


const { width, height } = Dimensions.get('window');
const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 95 }).current;

interface CarouselItem {
    id: string;
    title: string;
    uri: string;
}

const CAROUSEL_ITEMS = [
    { id: '1', title: 'Item 1', uri: 'https://picsum.photos/200/300'},
    { id: '2', title: 'Item 2', uri: 'https://picsum.photos/200/300'},
    { id: '3', title: 'Item 3', uri: 'https://picsum.photos/200/300'},
    { id: '4', title: 'Item 4', uri: 'https://picsum.photos/200/300'},
    { id: '5', title: 'Item 5', uri: 'https://picsum.photos/200/300'},
]

export default function AppCarousel() {
    let flatListRef = useRef<FlatList<CarouselItem> | null>(null);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const onViewRef =useRef(({changed}: {changed: any}) =>{
        setCurrentIndex(changed[0].index);
    })

    const scrollToIndex = (index: number) => {
        flatListRef.current?.scrollToIndex({animated:true, index:index});
    }

    const renderItem = ({ item }: { item: CarouselItem }) => {
        return (
            <View>
                <CardView></CardView> 
                <TouchableOpacity style={styles.container}
                onPress={() => { console.log('Item Pressed')}}
                activeOpacity={1}
                ></TouchableOpacity>
            </View>
           
        );
    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />

            <FlatList
                style={styles.carousel}
                data={CAROUSEL_ITEMS}
                renderItem={renderItem}
                keyExtractor={item => item.id}
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
                        onPress={() => scrollToIndex( index )}
                        />
                ))}
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    carousel:{
        maxHeight: 300,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green', 
        width: width * (2 / 3),
        height: 30, 
        borderRadius: 10
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    image: {
        width: width,
        height: 250,
        resizeMode: 'cover',
        marginVertical: 20,
    },
    footer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: 40,
        alignItems: 'center',
        backgroundColor: '#000',

    },
    footerText:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    dotView:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    cycle:{ 
        width: 10,
        height: 10,
        borderRadius: 50,
        marginHorizontal: 5,
        backgroundColor: 'gray',
        
    },
});