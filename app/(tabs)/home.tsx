import React from 'react';
<<<<<<< HEAD
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import MenuBurger from '../../components/MenuBurguer';
import PerfilButton from '../../components/PerfilButton';
import { StyleSheet } from 'react-native';
import Card from '../../components/Card';
=======
import { Text, View } from 'react-native';
import MenuBurger from '../../components/MenuBurguer';
import PerfilButton from '../../components/PerfilButton';
import { StyleSheet } from 'react-native';
import ACarousel from '../../components/ACarousel';
>>>>>>> ed6ca156230a4483e667281cd4421d1bbe3e1233

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
<<<<<<< HEAD
=======
                   
            </View>
            <View>
                <ACarousel></ACarousel>
            </View>
>>>>>>> ed6ca156230a4483e667281cd4421d1bbe3e1233

            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carousel}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ScrollView>
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


