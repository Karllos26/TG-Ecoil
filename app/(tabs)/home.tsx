import React from 'react';
import { Text, View } from 'react-native';
import MenuBurger from '../../components/MenuBurguer';
import PerfilButton from '../../components/PerfilButton';
import { StyleSheet } from 'react-native';
import ACarousel from '../../components/ACarousel';

export default function Home() {
    return (
        <View style={{ paddingTop: 20 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 30 }}>
                <MenuBurger
                    onPress={() => { }}
                    menuColor='#000'
                    size={45}
                ></MenuBurger>
                <PerfilButton
                    onPress={() => { }}
                    position={{ top: 20, right: 20 }}
                    size={45}
                    backgroundColor='gray'
                ></PerfilButton>
            </View>
            <View style={{ paddingTop: 30 }}>
                <Text style={styles.greetingUser}>Welcome, User!</Text>
            </View>
            <View>
                <ACarousel></ACarousel>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    options: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 30,
    },
    optionsText: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    },
    greetingUser: {
        fontSize: 20,
        marginTop: 40,
        textAlign: 'left',
        alignSelf: 'flex-start',
        margin: 20,
        fontWeight: 'bold',
    },

    carousel: {
        flexDirection: 'row',
        paddingVertical: 20,
    },
});


