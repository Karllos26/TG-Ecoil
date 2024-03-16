import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import { router } from 'expo-router'
import React from 'react';


export default function Login() {
  const handleLogin = () => {
    router.push('home')
  }

  return (
    <View style={styles.container}>
 <View style={styles.inputContainer}>
 <Image
        source={require('../assets/Logo-start.png')} // Altere o caminho para sua imagem
        style={styles.image}
      />
      <StyledInput 
      onChangeText={(texto) => console.log('Email',texto)}
      placeholder='Digite o seu e-mail'
      iconName="mail-outline" // Substitua path_to_your_icon pelo caminho real para o ícone
                size={300} // Defina o tamanho do input
                height={50} // Defina a altura do input 
                />
      
      <StyledInput
      onChangeText={(texto) => console.log('Senha',texto)}
      placeholder='Digite a senha' 
      iconName="lock-closed-outline" // Substitua path_to_your_icon pelo caminho real para o ícone
                size={300} // Defina o tamanho do input
                height={50} // Defina a altura do input 
      />
<TouchableOpacity >
          <Text style={styles.esqueci}>
            Esqueceu Sua Senha?
          </Text>
        </TouchableOpacity>
</View>
      <StyledButton 
      title='Entrar >'
      onPress={handleLogin}
      color='#028960'
      width={300}
      height={50}
      />
      <View style={styles.textContainer}>
<Text style={[styles.novouser,]}>
Novo Usuario?
      </Text>
      <TouchableOpacity>
          <Text style={styles.registrar}>
            Registre-se
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
    backgroundColor: '#DAF2F1', // Definindo a cor de fundo
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 132, // Ajuste a largura da imagem conforme necessário
    height: 177, // Ajuste a altura da imagem conforme necessário
    resizeMode: 'contain',
  },
  esqueci:{
    fontSize: 12,
    marginTop: 8, // Ajuste a margem conforme necessário
    marginLeft:160,
    color: 'blue',
    textDecorationLine: 'none',
    fontFamily: 'Montserrat Light',
  },
  registrar:{
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'none',
    fontFamily: 'Montserrat Medium',
  },
  novouser:{
    fontSize: 16,
    marginRight: 10, // Ajuste a margem conforme necessário
    fontFamily: 'Montserrat Medium'
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 10, // Ajuste a margem conforme necessário
  },
});
