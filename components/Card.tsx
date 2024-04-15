import React from 'react';
import { View, StyleSheet } from 'react-native';

interface CardProps {
  // Adicione as propriedades necessárias aqui
}

const Card: React.FC<CardProps> = ({}) => {
  return (
    <View style={styles.card}>
      {/* Conteúdo do card */}
      <View style={styles.semiCircle} />
    </View>
  );
};

const cardWidth = 170;
const cardHeight = 254;
const borderRadius = 12;
const semiCircleRadius = 19;

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    height: cardHeight,
    borderRadius: borderRadius,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  semiCircle: {
    position: 'absolute',
    top: cardHeight / 2 - semiCircleRadius,
    right: -semiCircleRadius,
    width: 197,
    height: 189,
    borderRadius:  50,
    backgroundColor: '#ff0000', // Cor de exemplo
  },
  image: {
    width: 132, // Ajuste a largura da imagem conforme necessário
    height: 177, // Ajuste a altura da imagem conforme necessário
    resizeMode: 'contain',
  },
});

export default Card;
