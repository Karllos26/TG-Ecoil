import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';


const { width, height } = Dimensions.get('window');

export default function CardView() {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>      
      <MaterialCommunityIcons name="account-circle" size={30} color="white" style={styles.icon} />
        <Text style={styles.cardContent}>Título do Card</Text>
        <Text style={styles.cardContent}>Descrição do Card</Text>
        <Text style={styles.cardContent}>Status do Card</Text>
        <Text style={styles.cardContent}>Data do Card</Text>
        <View style={styles.semiCircle} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 400,
    width: width * 0.75 - 20,
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
    overflow: 'hidden',
    position:'relative'
  },
  cardContent: {
    padding: 10,
    marginHorizontal: 18,
    marginVertical: 20,
    color:'#fff',
    zIndex: 1,
  },
  semiCircle: {
    position: 'absolute',
    top: 30,
    left: width * 0.25 ,
    width: 300,
    height: 300,
    borderRadius: 300,
    backgroundColor: '#40B59050', // Cor do semi-círculo
    zIndex: 0,
  },
  icon: {
    marginBottom: 20,
  },
});