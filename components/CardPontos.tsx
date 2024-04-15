import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const CardPonto = ({ iconName, coordinates, address }) => {
    return (
        <View style={styles.card}>
            <View style={styles.iconContainer}>
                <FontAwesome5 name={iconName} size={30} color="black" />
            </View>
            <View style={styles.addressContainer}>
                <Text style={styles.addressText}>Coordinates: {coordinates.latitude}, {coordinates.longitude}</Text>
                <Text style={styles.addressText}>Address: {address}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 337,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#40B59030',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#026016',
        borderWidth:1,
    },
    iconContainer: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
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
