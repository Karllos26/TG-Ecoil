import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

interface StyledInputProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    iconName?: any; // Tipo do ícone
    iconType?: "Ionicons" | "Feather"; // Tipo de ícone
    size?: number; // Tamanho do input
    height?: number; // Altura do input
    marginTop?: number; // Margem superior do View
    marginRight?: number;
}

export default function StyledInputUser({
    placeholder,
    onChangeText,
    iconName,
    iconType = "Ionicons", // Valor padrão para o tipo de ícone
    size = 10, // Valor padrão para o tamanho do input
    height = 10, // Valor padrão para a altura do input
    marginTop = 0, // Valor padrão para a margem superior
    marginRight = 0,
}: StyledInputProps) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <View style={[styles.inputContainer, { width: size, height: height, borderColor: isFocused ? "black" : "transparent", marginTop: marginTop, marginRight: marginRight }]}>
            <TextInput
                style={[styles.input, { width: size - 15, height: height }]}
                onChangeText={onChangeText}
                placeholder={placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {iconType === "Ionicons" && <Ionicons name={iconName} size={20} color="#000" style={styles.icon} />}
            {iconType === "Feather" && <Feather name={iconName} size={20} color="#000" style={styles.icon} />}
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "transparent",
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: "#40B590",
        justifyContent: 'space-between',
    },
    input: {
        flex: 1,
        height: 50,
        opacity: 0.5,
        fontFamily: 'Montserrat_300Light',
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 10,
        opacity: 0.5,
    },
});
