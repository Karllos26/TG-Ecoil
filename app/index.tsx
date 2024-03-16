import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import StyledButton from "../components/StyledButton";
import React from "react";
import Navigator from "../components/Navigator";
import Login from "./Login";




export default function Home(){



    return (
        <Login />
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