import React, {useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import RecipientesCard from '../../components/RecipientesCards';
import {getAllContainers, Container} from '@/components/service/Api';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');


const Tab = () => {
    const [containers, setContainers] = useState<Container[]>([]);

    useEffect(() => {
        const fetchContainers = async () => {
            try {
                const data = await getAllContainers();
                setContainers(data);
            } catch (error) {
                console.error('Error fetching containers:', error);
            }
        };

        fetchContainers();
    }, []);

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
                {containers.map((container) => (
                    <RecipientesCard
                        key={container.id}
                        imageSource={{uri: container.image}}
                        name={container.name}
                        description={container.description}
                        unitOfMeasure={container.unitOfMeasure}
                        maxCapacity={container.maxCapacity}
                    />
                ))}
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
        paddingBottom: 20
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