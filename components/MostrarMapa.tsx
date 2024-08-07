import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// No componente MostrarMapaButton
interface MostrarMapaButtonProps {
    onPress: () => void;
    showMap: boolean;
}

export const MostrarMapaButton: React.FC<MostrarMapaButtonProps> = ({ onPress, showMap }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.imageContainer}>
            <Image
                source={showMap ? require('../assets/icons/RetirarMap.png') : require('../assets/icons/RetirarMap.png')}
                style={styles.baseImage}
            />
            {showMap && (
            <Image
                source={require('../assets/icons/MostrarMap.png')}
                style={styles.overlayImage}
            />
            )}
        </View>
    </TouchableOpacity>
);

// No componente RecenterButton
interface RecenterButtonProps {
    onPress: () => void;
}

export const RecenterButton: React.FC<RecenterButtonProps> = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.overlayImage}>
        <FontAwesome5 name="location-arrow" size={30} color="black" />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    imageContainer: {
        width: 50,
        height: 50,
        position: 'relative',
    },
    baseImage: {
        width: 50,
        height: 50,
    },
    overlayImage: {
        width: 51, // Ajuste o tamanho conforme necessário
        height: 51, // Ajuste o tamanho conforme necessário
        position: 'absolute',
    },
});
