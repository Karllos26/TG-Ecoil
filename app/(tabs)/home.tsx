import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image, Alert } from 'react-native';
import { DrawerLayout, GestureHandlerRootView } from 'react-native-gesture-handler';
import MenuBurger from '../../components/MenuBurger'; // Importando o MenuBurger
import PerfilButton from '../../components/PerfilButton';
import ACarousel from '../../components/ACarousel';
import { router, useGlobalSearchParams } from 'expo-router';
import { signOut } from 'firebase/auth'
import { auth } from '../../firebaseConfig';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Home() {
    const { userId, email } = useGlobalSearchParams();
    const drawer = useRef<DrawerLayout>(null); // Referência para DrawerLayout
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Controle do estado da gaveta

    // Função para alternar o estado do Drawer
    const toggleDrawer = () => {
        if (drawer.current) {
            if (isDrawerOpen) {
                drawer.current.closeDrawer(); // Fechar o Drawer
            } else {
                drawer.current.openDrawer(); // Abrir o Drawer
            }
        }
        setIsDrawerOpen(!isDrawerOpen); // Atualiza imediatamente o estado
    };

    // Função para navegação para a tela de perfil
    const handlePerfil = () => {
        router.push('perfil');
    };

    const renderDrawerContent = () => (
        <View style={styles.drawerContainer}>
            <View style={styles.drawerTopSection}>
                {/* Imagem de perfil centralizada */}
                <Image
                    source={{ uri: 'https://via.placeholder.com/100' }} // Link da imagem do perfil
                    style={styles.profileImage}
                />
                <Text style={styles.userName}>Nome do Usuário aaa</Text>
            </View>

            <View style={styles.drawerLinks}>
                {renderMenuItem('Home', 'home')}
                {renderMenuItem('Agendamentos', 'agendamento')}
                {renderMenuItem('Pontos', 'pontos')}
                {renderMenuItem('Recipientes', 'recipientes')}
                {renderMenuItem('Perfil', 'perfil')}
                {logoutItem('Sair')}
            </View>
        </View>
    );

    const logout = () => {
        signOut(auth)
            .then(() => {
                router.push('/');
            })
            .catch((error) => {
                Alert.alert('Erro', 'Erro ao sair: ' + error.message);
            });
    };

    const logoutItem = (label: string) => (
        <TouchableOpacity style={styles.drawerLink} onPress={logout}>
            <Text style={styles.drawerLinkText}>{label}</Text>
        </TouchableOpacity>
    );

    const renderMenuItem = (label: string, route: string) => (
        <TouchableOpacity style={styles.drawerLink} onPress={() => router.push({
            pathname: route,
            params: { userId: userId, email: email },
          })}>
            <Text style={styles.drawerLinkText}>{label}</Text>
        </TouchableOpacity>
    );

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <MenuBurger
                onPress={toggleDrawer}  // Passando a função de abrir/fechar o Drawer
                menuColor='#000'
                size={40}
                isDrawerOpen={isDrawerOpen} // Passando o estado do Drawer para o MenuBurger
            />
            <DrawerLayout
                ref={drawer}
                drawerWidth={SCREEN_WIDTH * 0.7}
                drawerPosition="left"
                drawerType="front" // Usando "front" para que a gaveta sobreponha a tela
                renderNavigationView={renderDrawerContent}
                onDrawerOpen={() => setIsDrawerOpen(true)} // Abertura da gaveta
                onDrawerClose={() => setIsDrawerOpen(false)} // Fechamento da gaveta
            >
                <View style={{ flex: 1, paddingTop: 20 }}>
                    {/* Menu Burger com animação */}

                    <PerfilButton
                        onPress={handlePerfil}
                        position={{ top: 20, right: 20 }}
                        size={45}
                        backgroundColor='gray'
                    />
                    <View style={{ paddingTop: 30 }}>
                        <Text style={styles.greetingUser}>Welcome, User!</Text>
                    </View>
                    <View>
                        <ACarousel />
                    </View>
                </View>
            </DrawerLayout>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    drawerTopSection: {
        backgroundColor: '#028960',
        height: '33%', // 1/3 da tela
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: 3,
        position: 'absolute',
        bottom: -50, // Centraliza a imagem na divisão de cores
    },
    userName: {
        marginTop: 60, // Espaço abaixo da imagem
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    drawerLinks: {
        padding: 20,
        marginTop: 60, // Espaço para o nome do usuário
    },
    drawerLink: {
        marginVertical: 10,
    },
    drawerLinkText: {
        fontSize: 18,
        color: '#028960',
    },
    greetingUser: {
        fontSize: 20,
        marginTop: 40,
        textAlign: 'left',
        alignSelf: 'flex-start',
        margin: 20,
        fontWeight: 'bold',
    },
});
