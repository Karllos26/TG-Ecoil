import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import StyledButton from '../components/StyledButton';
import { router } from 'expo-router'
import React, { useState } from 'react';
import StyledInputAdress from '../components/StyledInputAdress';
import PageIndicator from '../components/PageIndicator';
import StyledInputUser from '../components/StyledInputUser';
import Checkbox from '../components/CheckBoxTerms';


export default function CadastroColetora() {

    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleAcceptTermsChange = (value: boolean) => {
        setAcceptTerms(value);
    };
    
    const handleHome = () => {
        router.push('home')
    }

    const handleLogin = () => {
        router.push('Login')
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>

                <Text style={[styles.cadastro,]}>
                    Cadastro
                </Text>
                <View style={styles.pageIndicator}>
                    <View style={styles.itemLeft}>
                        <PageIndicator active={true} text="Coletora" destination="cadastroColetora" />
                    </View>
                    <View style={styles.itemRight}>
                        <PageIndicator active={false} text="Usuario" destination="cadastroUsuario" />
                    </View>
                </View>



                <StyledInputUser
                    onChangeText={(texto) => console.log('Email', texto)}
                    placeholder='Nome compleo'
                    iconType='Feather'
                    iconName="user" // Substitua path_to_your_icon pelo caminho real para o ícone
                    size={300} // Defina o tamanho do input
                    height={50} // Defina a altura do input 
                    marginTop={10}
                />
                <StyledInputUser
                    onChangeText={(texto) => console.log('Email', texto)}
                    placeholder='CNPJ'
                    iconType='Feather'
                    iconName="user" // Substitua path_to_your_icon pelo caminho real para o ícone
                    size={300} // Defina o tamanho do input
                    height={50} // Defina a altura do input 
                    marginTop={10}
                />
                <StyledInputUser
                    onChangeText={(texto) => console.log('Email', texto)}
                    placeholder='Email'
                    iconName="mail-outline" // Substitua path_to_your_icon pelo caminho real para o ícone
                    size={300} // Defina o tamanho do input
                    height={50} // Defina a altura do input 
                    marginTop={10}
                />
                <StyledInputUser
                    onChangeText={(texto) => console.log('Email', texto)}
                    placeholder='Telefone'
                    iconType='Feather'
                    iconName="smartphone" // Substitua path_to_your_icon pelo caminho real para o ícone
                    size={300} // Defina o tamanho do input
                    height={50} // Defina a altura do input 
                    marginTop={10}
                />

                <StyledInputUser
                    onChangeText={(texto) => console.log('Senha', texto)}
                    placeholder='Digite a senha'
                    iconName="lock-closed-outline" // Substitua path_to_your_icon pelo caminho real para o ícone
                    size={300} // Defina o tamanho do input
                    height={50} // Defina a altura do input 
                    marginTop={10}
                />
                <View style={styles.addressContainer}>
                    <View style={styles.row}>
                        <StyledInputAdress
                            onChangeText={(texto) => console.log('CEP', texto)}
                            placeholder='CEP'
                            size={139}
                            height={33}
                            marginTop={10}
                            marginRight={15}
                        />
                        <StyledInputAdress
                            onChangeText={(texto) => console.log('Bairro', texto)}
                            placeholder='Bairro'
                            size={144}
                            height={33}
                            marginTop={10}
                        />
                    </View>
                    <View style={styles.row}>
                        <StyledInputAdress
                            onChangeText={(texto) => console.log('UF', texto)}
                            placeholder='UF'
                            size={50}
                            height={33}

                        />
                        <StyledInputAdress
                            onChangeText={(texto) => console.log('Número', texto)}
                            placeholder='Número'
                            size={80}
                            height={33}
                        />
                        <StyledInputAdress
                            onChangeText={(texto) => console.log('Cidade', texto)}
                            placeholder='Cidade'
                            size={156}
                            height={33}
                        />
                    </View>
                    <View style={styles.row}>
                        <StyledInputAdress
                            onChangeText={(texto) => console.log('Rua', texto)}
                            placeholder='Rua'
                            size={150}
                            height={33}
                        />
                        <StyledInputAdress
                            onChangeText={(texto) => console.log('Complemento', texto)}
                            placeholder='Complemento'
                            size={125}
                            height={33}

                        />
                    </View>
                </View>
                <View style={styles.textContainer}>
                <Checkbox checked={acceptTerms} onChange={handleAcceptTermsChange} />
                    <Text style={[styles.termsandcondtions,]}>
                       Clique na checking box para aceitar nossos
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.linktermsandcondtions}>
                            termos
                        </Text>
                    </TouchableOpacity>
                    <Text style={[styles.termsandcondtions,]}>
                       e
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.linktermsandcondtions}>
                            condições
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StyledButton
                title='Cadastrar'
                onPress={handleHome}
                color='#028960'
                width={300}
                height={50}
            />
            <View style={styles.textContainer}>
                <Text style={[styles.novouser,]}>
                    Já sou um Usuario?
                </Text>
                <TouchableOpacity  onPress={handleLogin}>
                    <Text style={[styles.registrar]}>
                        Logar
                    </Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: 322,
        height: 527,
        borderRadius: 40, // Adicionando bordas redondas
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 132, // Ajuste a largura da imagem conforme necessário
        height: 177, // Ajuste a altura da imagem conforme necessário
        resizeMode: 'contain',
    },
    esqueci: {
        fontSize: 12,
        marginTop: 8, // Ajuste a margem conforme necessário
        marginLeft: 160,
        color: 'blue',
        textDecorationLine: 'none',
    },
    registrar: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'none',
    },
    novouser: {
        fontSize: 16,
        marginRight: 10, // Ajuste a margem conforme necessário
    },
    textContainer: {
        flexDirection: 'row',
        marginTop: 10, // Ajuste a margem conforme necessário
        marginBottom: 24,
    },
    addressContainer: {
        marginTop: 0,

        alignContent: 'space-between',

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    cadastro: {
        fontSize: 60,
        marginBottom:24,
    },
    pageIndicator: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '100%',
    },
    itemLeft: {
        flex: 1,
        alignItems: 'flex-start',
    },
    itemRight: {
        flex: 1,
        alignItems: 'flex-end',
    },
    termsandcondtions: {
        fontSize: 10,
        marginRight: 4, // Ajuste a margem conforme necessário
        
    },
    linktermsandcondtions: {
        fontSize: 10,
        color: 'blue',
        textDecorationLine: 'none',
        marginRight: 4, // Ajuste a margem conforme necessário
        
    }
});
