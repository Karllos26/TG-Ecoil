import React, { useState } from "react";
import { TextInput, StyleSheet, View, Image, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
    useFonts,
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  } from '@expo-google-fonts/montserrat';


interface StyledInputProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    iconName?: any; // Tipo do ícone
    size?: number; // Tamanho do input
    height?: number; // Altura do input
    width?: number
}

export default function StyledInput({
    placeholder,
    onChangeText,
    iconName,
    size = 10, // Valor padrão para o tamanho do input
    height = 10, // Valor padrão para a altura do input
}: StyledInputProps) {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (

        <View style={[styles.inputContainer, {width: size, height: height, borderColor: isFocused ? "black" : "transparent" , justifyContent: "space-between"}]}>
            
                <TextInput
               
                    style={[styles.input, { width: size - 30}]}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
       
            <Ionicons name={iconName} size={20} color="#000" style={styles.icon} />
        </View>

    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 24,
        borderWidth: 1,
        borderColor: "transparent",
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: "#40B590"
    },
    input: {
        flex: 1,
        height: 40,
        opacity: 0.5,
        fontFamily: 'Montserrat_300Light',
        
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
});
