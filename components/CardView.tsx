import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';


const { width, height } = Dimensions.get('window');

export default function CardView() {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>      
        <Text style={styles.cardContent}>Título do Card</Text>
        <Text style={styles.cardContent}>Descrição do Card</Text>
        <Text style={styles.cardContent}>Status do Card</Text>
        <Text style={styles.cardContent}>Data do Card</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 400,
    width: width * 0.8 - 20,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#028960',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 20,
  },
  cardContent: {
    padding: 10,
    marginHorizontal: 18,
    marginVertical: 20,
  }
});