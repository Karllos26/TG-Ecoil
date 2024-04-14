import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import { FontAwesome } from '@expo/vector-icons';

interface StyledButtonProps {
    title?: string
    onPress: () => void
    color?: string
    width?: number; // Tamanho do input
    height?: number
    icon?: any
    colorItem?: string
    size?: number
}


export default function StyledButtonIcon(
    { title, onPress, color, icon, colorItem, size }: StyledButtonProps
) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color }]}
            onPress={onPress}
        >
            {title && <Text style={[styles.buttonText, { fontSize: size, color: colorItem }]}>{title}</Text>}
            {icon && <FontAwesome name={icon} size={size} color={colorItem} />}
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        marginTop: 28,
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row', // Align icon and text horizontally
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10, // Add spacing between icon and text
        paddingRight: 10,
        alignItems: 'center', // Center text vertically
    },
    icon: {
        marginLeft: 10, // Add spacing between icon and text
        alignItems: 'center', // Center icon vertically
    },
})