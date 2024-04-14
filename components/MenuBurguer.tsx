import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface MenuBurgerProps {
    onPress: () => void;
    size?: number;
    menuColor?: string;
}

const MenuBurger: React.FC<MenuBurgerProps> = ({ onPress, size, menuColor }) => {
    return (
        <TouchableOpacity
            style={{ position: 'absolute', top: 20, left: 20 }}
            onPress={onPress}
        >
            <FontAwesome name="bars" size={size} color={menuColor} />
        </TouchableOpacity>
    );
};

export default MenuBurger;