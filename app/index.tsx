import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import StyledButton from "../components/StyledButton";
import React from "react";
import Navigator from "../components/Navigator";




export default function Home(){

    const handleLogin = () => {
        router.push('startComponent')
      }

    return (
        <Navigator />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
}
)