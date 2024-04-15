import React, { useEffect, useRef, useState } from 'react';
import { View, Image, ScrollView, Dimensions, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    LocationObject,
    watchPositionAsync,
    LocationAccuracy,
} from 'expo-location';
import CardPonto from '../../components/CardPontos';
import { MostrarMapaButton, RecenterButton } from '../../components/MostrarMapa';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function PontosTeste() {
    const [location, setLocation] = useState<LocationObject | null>(null);
    const [userLocation, setUserLocation] = useState<LocationObject | null>(null);
    const [showMap, setShowMap] = useState<boolean>(false);
    const [initialRegionSet, setInitialRegionSet] = useState<boolean>(false);
    const userMarkerRef = useRef<Marker>(null);

    const coordinates = [
        { latitude: -23.107182648899645, longitude: -47.208086673209 },
        { latitude: -23.103871865173687, longitude: -47.24135853604824 },
        { latitude: -23.095187454583424, longitude: -47.2489116364696 },
        { latitude: -23.07560599691973, longitude: -47.19363667429518 },
        { latitude: -23.082554582582276, longitude: -47.20290638844865 }
    ];

    const mapRef = useRef<MapView>(null);

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
        async function watchLocation() {
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
    }, []);

    const recenterMap = () => {
        if (userLocation) {
            mapRef.current?.animateCamera({
                center: userLocation.coords,
            });
        }
    };

    return (
        <View style={styles.container}>

            {showMap && userLocation && (
                <MapView
                    style={styles.map}
                    ref={mapRef}
                    initialRegion={{
                        latitude: userLocation.coords.latitude,
                        longitude: userLocation.coords.longitude,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                >
                    {/* Customizando o marcador de localização do usuário */}
                    <Marker
                        ref={userMarkerRef}
                        coordinate={{
                            latitude: userLocation.coords.latitude,
                            longitude: userLocation.coords.longitude,
                        }}
                    >
                        <MaterialCommunityIcons name="map-marker-radius" size={50} color="blue" />
                    </Marker>

                    {/* Adicionando marcadores dos pontos */}
                    {coordinates.map((coord, index) => (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: coord.latitude,
                                longitude: coord.longitude,
                            }}
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

            <View style={styles.buttonContainer}>
                <MostrarMapaButton onPress={() => setShowMap(!showMap)} showMap={showMap} />
                {userLocation && (
                    <RecenterButton onPress={recenterMap} />
                )}
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {coordinates.map((coord, index) => (
                    <CardPonto
                        key={index}
                        iconName="map-marker-alt"
                        coordinates={coord}
                        address="Endereço do local"
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20,
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
        
        width: 1 / 4 * screenHeight, // Ajuste a largura da imagem conforme necessário
        height: 190, // Ajuste a altura da imagem conforme necessário
    
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
