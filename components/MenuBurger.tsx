import React, { useState, useRef, useEffect } from 'react';
import { Animated, TouchableOpacity, View, StyleSheet } from 'react-native';

interface MenuBurgerProps {
    onPress: () => void;  // Função que será executada ao clicar
    menuColor: string;    // Cor do ícone
    size: number;         // Tamanho do ícone
    isDrawerOpen: boolean; // Estado para determinar se o Drawer está aberto
}

export default function MenuBurger({ onPress, menuColor, size, isDrawerOpen }: MenuBurgerProps) {
    const rotateValue = useRef(new Animated.Value(0)).current;

    // Atualiza a rotação imediatamente ao pressionar
    const toggleRotation = () => {
        Animated.timing(rotateValue, {
            toValue: isDrawerOpen ? 1 : 0, // Altera a rotação com base no estado do Drawer
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        // Controla a rotação quando o estado da gaveta (Drawer) mudar
        toggleRotation();
    }, [isDrawerOpen]);

    // Animação de rotação
    const rotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '270deg'], // 90 graus para rotação
    });

    return (
        <TouchableOpacity onPress={onPress} style={styles.menuButton}>
            <Animated.View style={[styles.menuIcon, { transform: [{ rotate }] }]}>
                <View style={styles.burgerBar} />
                <View style={styles.burgerBar} />
                <View style={styles.burgerBar} />
            </Animated.View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    menuButton: {
        position: 'absolute',
        top: 30,
        left: 20,
        zIndex: 1000,  // Fica acima de outros componentes
    },
    menuIcon: {
        width: 40,
        height: 35,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    burgerBar: {
        width: '90%',
        height: 5,
        backgroundColor: '#000',
    },
});
