// CarouselCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');

const CarouselCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.circle} />
      <MaterialCommunityIcons name="account-circle" size={30} color="white" style={styles.icon} />
      <Text style={styles.projectTitle}>Project III</Text>
      <Text style={styles.mainText}>icon Modification</Text>
      <Text style={styles.date}>June 17 2022</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#007b53', // Cor de fundo verde
    borderRadius: 20,
    padding: 20,
    width: screenWidth * 0.8,
    height: screenWidth * 1.2,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
    overflow: 'hidden', // Para garantir que o círculo não ultrapasse as bordas
  },
  circle: {
    position: 'absolute',
    top: -screenWidth * 0.4,
    right: -screenWidth * 0.4,
    width: screenWidth * 0.8,
    height: screenWidth * 0.8,
    borderRadius: screenWidth * 0.4,
    backgroundColor: 'rgba(0, 123, 83, 0.6)', // Círculo verde semi-transparente
  },
  icon: {
    marginBottom: 20,
  },
  projectTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 60,
  },
  mainText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 200,
  },
  date: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'flex-end',
  },
});

export default CarouselCard;
