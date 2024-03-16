import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function StartScren (){
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logo-start.png')} // Altere o caminho para sua imagem
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A0DCAD', // Altere a cor de fundo conforme necessário
  },
  image: {
    width: 132, // Ajuste a largura da imagem conforme necessário
    height: 177, // Ajuste a altura da imagem conforme necessário
    resizeMode: 'contain',
  },
});