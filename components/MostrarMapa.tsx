import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// No componente MostrarMapaButton
interface MostrarMapaButtonProps {
    onPress: () => void;
    showMap: boolean;
}

export const MostrarMapaButton: React.FC<MostrarMapaButtonProps> = ({ onPress, showMap }) => (
    <TouchableOpacity onPress={onPress}>
        <Image
            source={showMap ? require('../assets/icons/MostrarMap.png') : require('../assets/icons/RetirarMap.png')}
            style={{ width: 50, height: 50 }}
        />
    </TouchableOpacity>
);

// No componente RecenterButton
interface RecenterButtonProps {
    onPress: () => void;
}

export const RecenterButton: React.FC<RecenterButtonProps> = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
         <FontAwesome5 name="location-arrow" size={24} color="black" />
    </TouchableOpacity>
);
