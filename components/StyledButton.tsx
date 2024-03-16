import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

interface StyledButtonProps {
    title: string
    onPress: () => void
    color?: string
    width?: number; // Tamanho do input
    height?: number
}

export default function StyledButton(
    { title, onPress, color }: StyledButtonProps
) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color }]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
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
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
})
