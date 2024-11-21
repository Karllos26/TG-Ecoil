import { StyleSheet } from "react-native";
import React from "react";
import LoginBasic from "./LoginBasic";


export default function Index() {
    return (
        <LoginBasic />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A0DCAD',
        alignItems: 'center',
        justifyContent: 'center',
    }
}
)