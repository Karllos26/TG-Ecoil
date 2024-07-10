import React, { useEffect, useRef, useState } from 'react';
import { View, Image, ScrollView, Dimensions, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { MapMarker, Marker } from 'react-native-maps';
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    LocationObject,
    watchPositionAsync,
    LocationAccuracy,
    reverseGeocodeAsync,
} from 'expo-location';
import CardPonto from '../../components/CardPontos';
import { MostrarMapaButton, RecenterButton } from '../../components/MostrarMapa';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function PontosTeste() {
    const [location, setLocation] = useState<LocationObject | null>(null);
    const [userLocation, setUserLocation] = useState<LocationObject | null>(null);
    const [showMap, setShowMap] = useState<boolean>(false);
    const [initialRegionSet, setInitialRegionSet] = useState<boolean>(false);
    const [pointsWithAddresses, setPointsWithAddresses] = useState<{ latitude: number, longitude: number, address: string }[]>([]);
    const [selectedPointIndex, setSelectedPointIndex] = useState<number | null>(null);
    const userMarkerRef = useRef<MapMarker>(null);
    const mapRef = useRef<MapView>(null);

    const coordinates = [
        { latitude: -23.107637, longitude: -47.208201 },
        { latitude: -23.105971, longitude: -47.241040 },
        { latitude: -23.097050, longitude: -47.240684 },
        { latitude: -23.076472, longitude: -47.193565 },
        { latitude: -23.085282, longitude: -47.202560 }
    ];

    async function requestLocationPermission() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
            setUserLocation(currentPosition);
            setShowMap(true);
        }
    }

    useEffect(() => {
        async function getLocation() {
            await requestLocationPermission();
        }
        getLocation();
    }, []);

    useEffect(() => {
        const watchLocation = async () => {
            const subscriber = await watchPositionAsync(
                {
                    accuracy: LocationAccuracy.Highest,
                    timeInterval: 1000,
                    distanceInterval: 1,
                },
                (response) => {
                    setLocation(response);
                    setUserLocation(response);
                    if (!initialRegionSet) {
                        mapRef.current?.animateCamera({
                            center: response.coords,
                        });
                        setInitialRegionSet(true);
                    }
                }
            );

            return () => {
                if (subscriber) {
                    subscriber.remove();
                }
            };
        }

        watchLocation();
    }, [initialRegionSet]);

    useEffect(() => {
        const fetchAddresses = async () => {
            const addresses = await Promise.all(
                coordinates.map(async (coord) => {
                    const [addressObj] = await reverseGeocodeAsync({
                        latitude: coord.latitude,
                        longitude: coord.longitude,
                    });
                    const address = `${addressObj.street}, ${addressObj.city}`;
                    return { ...coord, address };
                })
            );
            setPointsWithAddresses(addresses);
        };

        fetchAddresses();
    }, []);

    const recenterMap = () => {
        if (userLocation) {
            mapRef.current?.animateCamera({
                center: userLocation.coords,
            });
        }
    };

    const handleCardPress = (index: number) => {
        const selectedPoint = pointsWithAddresses[index];
        mapRef.current?.animateCamera({
            center: {
                latitude: selectedPoint.latitude,
                longitude: selectedPoint.longitude,
            },
            zoom: 15,
        });
        setSelectedPointIndex(index);
    };

    const handleMarkerPress = (index: number) => {
        setSelectedPointIndex(index);
    };

    const handleMapPress = () => {
        setSelectedPointIndex(null); // Reset selected point index to show all cards
    };

    const handleRecenterButtonPress = () => {
        recenterMap();
        handleMapPress();
    };

    return (
        <View style={styles.container}>
            {showMap && userLocation && (
                <MapView
                    style={styles.map}
                    ref={mapRef}
                    onPress={handleMapPress} // Handle map press to reset selected point index
                    initialRegion={{
                        latitude: userLocation.coords.latitude,
                        longitude: userLocation.coords.longitude,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                >
                    <Marker
                        ref={userMarkerRef}
                        coordinate={{
                            latitude: userLocation.coords.latitude,
                            longitude: userLocation.coords.longitude,
                        }}
                    >
                        <MaterialCommunityIcons name="map-marker-radius" size={50} color="blue" />
                    </Marker>

                    {pointsWithAddresses.map((point, index) => (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: point.latitude,
                                longitude: point.longitude,
                            }}
                            onPress={() => handleMarkerPress(index)}
                        >
                            <MaterialCommunityIcons name="map-marker" size={40} color="red" />
                        </Marker>
                    ))}
                </MapView>
            )}

            {!showMap && (
                <View style={styles.imageview}>
                    <Image
                        source={require('../../assets/Logo-start.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
            )}

            <View style={styles.buttonContainer1}>
                <MostrarMapaButton onPress={() => {setShowMap(!showMap); setSelectedPointIndex(null);}} showMap={showMap}   />
                
                </View>
                <View style={styles.buttonContainer2}>
                {userLocation && (
                    <RecenterButton onPress={handleRecenterButtonPress} />
                )}
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {pointsWithAddresses.map((point, index) => (
                    selectedPointIndex === null || selectedPointIndex === index ? (
                        <TouchableOpacity key={index} onPress={() => handleCardPress(index)}>
                            <CardPonto
                                iconName="map-marker-alt"
                                coordinates={point}
                                address={point.address}
                                onPress={() => handleCardPress(index)}
                            />
                        </TouchableOpacity>
                    ) : null
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    map: {
        height: 0.5 * screenHeight,
    },
    imageview: {
        flex: 1 / 3 * screenHeight,
        resizeMode: 'contain',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25
    },
    image: {
        width: 1 / 4 * screenHeight,
        height: 190,
    },
    buttonContainer1: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 650,  // Ajusta a distância do bottom conforme necessário
        right: 2,
    },
    buttonContainer2: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 620,  // Ajusta a distância do bottom conforme necessário
        right: 18,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
