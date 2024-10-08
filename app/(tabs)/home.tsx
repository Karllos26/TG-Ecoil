import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import MenuBurger from '../../components/MenuBurguer';
import PerfilButton from '../../components/PerfilButton';
import ACarousel from '../../components/ACarousel';
import { router } from 'expo-router';

export default function Home() {

    const handlePerfil = () => {
        router.push('perfil')
      }

    return (
        <View style={{ flex: 1, paddingTop: 20 }}>
            <View style={{justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 30 }}>
                <MenuBurger
                    onPress={() => { }}
                    menuColor='#000'
                    size={40}
                />
                <PerfilButton
                    onPress={handlePerfil}
                    position={{ top: 20, right: 20 }}
                    size={45}
                    backgroundColor='gray'
                />
            </View>
            <View style={{ paddingTop: 30 }}>
                <Text style={styles.greetingUser}>Welcome, User!</Text>
            </View>
            <View>
                <ACarousel />
            </View>

        </View>
    );
}

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
    appCarouselContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
