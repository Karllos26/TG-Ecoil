import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface CardProps {
  // Adicione as propriedades necessárias aqui
}

const Card: React.FC<CardProps> = ({}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <FontAwesome name="user-circle" size={24} color="#ffffff" />
        <Text style={styles.projectText}>Project III</Text>
      </View>
      <Text style={styles.title}>icon Modification</Text>
      <Text style={styles.date}>June 17 2022</Text>
      <View style={styles.semiCircle} />
    </View>
  );
};

const cardWidth = 170;
const cardHeight = 254;
const borderRadius = 12;
const semiCircleRadius = 120;

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    height: cardHeight,
    borderRadius: borderRadius,
    backgroundColor: '#008C74', // Cor de fundo do card
    overflow: 'hidden',
    padding: 16,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  projectText: {
    color: '#ffffff', // Cor do texto do projeto
    fontWeight: 'bold',
    marginLeft: 8,
  },
  title: {
    color: '#ffffff', // Cor do título
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  date: {
    color: '#ffffff', // Cor da data
    fontSize: 12,
  },
  semiCircle: {
    position: 'absolute',
    top: 42.5,
    left: 63.5,
    width: 197,
    height: 189,
    borderRadius: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Cor do semi-círculo
  },
});

export default Card;
