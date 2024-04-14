import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface PageIndicatorProps {
  active: boolean; // Indica se a página está ativa
  text: string; // Texto exibido ao lado da caixa
  destination: string; // Rota de destino para redirecionamento
}

const PageIndicator: React.FC<PageIndicatorProps> = ({ active, text, destination }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(destination);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={[styles.indicator, !active && styles.containerInactive]} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  containerInactive: {
    borderWidth: 1, // Adiciona uma borda de 1 pixel
    borderColor: 'black', // Cor da borda
    backgroundColor: 'transparent', // Cor da caixa quando está inativa
  },
  indicator: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: 'blue', // Cor da caixa quando está ativa
    marginRight: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default PageIndicator;
