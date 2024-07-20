import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';

interface CardPontoProps {
    iconName: string;
    coordinates: { latitude: number; longitude: number };
    address: string;
    onPress: () => void;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const CardPonto: React.FC<CardPontoProps> = ({ iconName, coordinates, address, onPress }) => {
    const [addressDetails, setAddressDetails] = useState<any>(null);

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const { latitude, longitude } = coordinates;
                const response = await axios.get(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
                );

                if (response.data.address) {
                    setAddressDetails(response.data.address);
                } else {
                    setAddressDetails({});
                }
            } catch (error) {
                console.error('Erro ao buscar endereço:', error);
                setAddressDetails({});
            }
        };

        fetchAddress();
    }, [coordinates]);

    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <View style={styles.iconContainer}>
                <FontAwesome5 name={iconName} size={30} color="black" />
            </View>
            <View style={styles.addressContainer}>
                <Text style={styles.addressText}>
                    {addressDetails?.road && `${addressDetails.road}`}
                    {addressDetails?.house_number && `, ${addressDetails.house_number}`}
                    {addressDetails?.neighbourhood && `, ${addressDetails.neighbourhood}`}
                    {addressDetails?.city && `, ${addressDetails.city}`}
                </Text>
                <Text style={styles.addressText}>
                    {addressDetails?.state && `${addressDetails.state}`}
                    {addressDetails?.postcode && `, ${addressDetails.postcode}`}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 0.9 * screenWidth,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#40B59030',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#026016',
        borderWidth: 1,
    },
    iconContainer: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 10,
        backgroundColor: 'white',
    },
    addressContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    addressText: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default CardPonto;
