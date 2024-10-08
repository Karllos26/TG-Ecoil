import React from 'react';
import { ScrollView, Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import MenuBurger from '../components/MenuBurguer';
import PerfilButton from '../components/PerfilButton';
import { router } from 'expo-router';

export default function Profile() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 20 }}>
            <View style={{ justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 30 }}>
                <MenuBurger
                    onPress={() => { }}
                    menuColor='#000'
                    size={40}
                />
                <PerfilButton
                    onPress={() => { }}
                    position={{ top: 20, right: 20 }}
                    size={45}
                    backgroundColor='gray'
                />
            </View>

            {/* Seção de informações do perfil */}
            <View style={styles.profileContainer}>
                <Image 
                    source={{ uri: 'https://via.placeholder.com/150' }} // Imagem do perfil
                    style={styles.profileImage}
                />
                <Text style={styles.userName}></Text>
                <Text style={styles.userBio}>
                    
                </Text>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>Settings</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        alignItems: 'center',
        paddingTop: 30,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    userBio: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
    },
});
