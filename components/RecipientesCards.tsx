import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

interface RecipientesCardProps {
    imageSource: any; // Ajuste o tipo conforme necessário para suas imagens
    name: string;
    description: string;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const RecipientesCard: React.FC<RecipientesCardProps> = ({ imageSource, name, description }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardImage}>
                <Image source={imageSource} style={styles.image} />
            </View>
            <Text style={styles.nameLabel}>Nome:</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#40B59030', // Verde claro
        borderRadius: 15,
        padding: 10,
        alignItems:'center',
        width: 0.4 * screenWidth, // Ajuste conforme necessário
        height: 0.25 * screenHeight, // Ajuste conforme necessário
        margin: 10,
        borderColor: '#026016',
        borderWidth: 1
    },
    image: {
        width: 80,
        height: 80,
    },
    cardImage: {
        backgroundColor: '#fff', // Fundo branco para a imagem
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: 0.3 * screenWidth, // Ajuste conforme necessário
        height: 0.11 * screenHeight, // Ajuste conforme necessário
        marginBottom: 10,
        borderColor: '#00000090',
        borderWidth: 1
    },
    nameLabel: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
    name: {
        fontSize: 15,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
    description: {
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 16,
    },
});

export default RecipientesCard;
