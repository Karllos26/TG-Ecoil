import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import RecipientesCard from '../../components/RecipientesCards';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Tab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageview}>
                    <Image
                        source={require('../../assets/Logo-start.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <RecipientesCard
          imageSource={require('../../assets/Tambor.png')}
          name="Tambor plástico com tampa"
          description="20 litros"
        />
        <RecipientesCard
          imageSource={require('../../assets/Tambor.png')}
          name="Tambor plástico com tampa"
          description="30 litros"
        />
        <RecipientesCard
          imageSource={require('../../assets/Tambor.png')}
          name="Tambor plástico com tampa"
          description="50 litros"
        />
        <RecipientesCard
          imageSource={require('../../assets/GarrafaPet.png')}
          name="Garrafa PET"
          description="Até 2 litros"
        />
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imageview: {

    resizeMode: 'contain',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom:20
},
image: {
    width: 0.25 * screenHeight,
    height: 0.4 * screenWidth,
},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default Tab;
