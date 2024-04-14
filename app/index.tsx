import { StyleSheet } from "react-native";
import React from "react";
import CadastroColetora from "./cadastroColetora";


export default function Index(){
    return (
        <CadastroColetora/>
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