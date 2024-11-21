import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import MenuBurger from '../components/MenuBurger';
import { router } from 'expo-router';
import { DrawerLayout, GestureHandlerRootView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, firestore } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Profile() {
    const drawer = useRef<DrawerLayout>(null); // Referência para DrawerLayout
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Controle do estado da gaveta
    const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // Imagem padrão do perfil
    const [userInfo, setUserInfo] = useState({
        name: 'Convidado',
        email: 'convidado@example.com',
        phone: 'N/A',
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userDoc = await getDoc(doc(firestore, 'users', user.uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setUserInfo({
                        name: userData.name || 'Convidado',
                        email: userData.email || 'convidado@example.com',
                        phone: userData.phone || 'N/A',
                    });
                    setProfileImage(userData.profileImage || 'https://via.placeholder.com/150');
                }
            }
        });

        return () => unsubscribe();
    }, []);

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

    // Função para selecionar uma imagem da galeria ou tirar uma nova
    const handleProfileImageChange = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        }
    };

    const renderDrawerContent = () => (
        <View style={styles2.drawerContainer}>
            <View style={styles2.drawerTopSection}>
                <Image
                    source={{ uri: profileImage }} // Link da imagem do perfil
                    style={styles2.profileImage}
                />
                <Text style={styles2.userName}>{userInfo.name}</Text>
            </View>

            <View style={styles2.drawerLinks}>
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
        <TouchableOpacity style={styles2.drawerLink} onPress={logout}>
            <Text style={styles2.drawerLinkText}>{label}</Text>
        </TouchableOpacity>
    );

    const renderMenuItem = (label: string, route: string) => (
        <TouchableOpacity style={styles2.drawerLink} onPress={() => router.push(route)}>
            <Text style={styles2.drawerLinkText}>{label}</Text>
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
                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 20 }}>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 30 }}>
                        {/* Conteúdo do Perfil */}
                        <View style={styles.profileContainer}>
                            <TouchableOpacity onPress={handleProfileImageChange}>
                                <Image
                                    source={{ uri: profileImage }} // Imagem do perfil
                                    style={styles.profileImage}
                                />
                            </TouchableOpacity>
                            <Text style={styles.userName}>{userInfo.name}</Text>
                            <Text style={styles.userEmail}>{userInfo.email}</Text>
                            <Text style={styles.userPhone}>{userInfo.phone}</Text>
                        </View>
                    </View>
                </ScrollView>
            </DrawerLayout>
        </GestureHandlerRootView>
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
        marginBottom: 5,
    },
    userEmail: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
    userPhone: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
});

const styles2 = StyleSheet.create({
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
});