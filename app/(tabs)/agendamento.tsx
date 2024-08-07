import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';

const monthNames = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export default function Tab() {

  const [currentMonth, setCurrentMonth] = useState<string>(monthNames[new Date().getMonth()]);
  const [selectedDay, setSelectedDay] = useState<number>(new Date().getDate());
  const daysInMonth: number = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
  const days: number[] = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const renderItem = ({ item }: { item: number }) => {
    const dayStyle = item === selectedDay ? styles.selectedDay : styles.day;
    return (
      <TouchableOpacity style={dayStyle} onPress={() => handleDayPress(item)}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  const handleAgendar = () => {
    router.push('agendamento')
  }

  const handleDayPress = (day: number) => {
    setSelectedDay(day);
    // Aqui você pode adicionar lógica adicional ao selecionar um dia, se necessário
  };

  useEffect(() => {
    // Define o dia atual como selecionado quando o componente é montado
    setSelectedDay(new Date().getDate());
  }, []);

  return (
    <View>
      <View style={{ justifyContent: 'space-evenly', alignContent: "space-between", display: 'flex', }}>
        <View>
          <Text style={styles.textTitle}>{currentMonth}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleAgendar}
          >
            <Text style={styles.buttonText}>Agendar</Text>
            <FontAwesome style={styles.icon} name='plus' color='#fff' />
          </TouchableOpacity>
        </View>

      </View>
      <View >
        <FlashList
          data={days}
          renderItem={renderItem}
          estimatedItemSize={200}
          horizontal
          snapToAlignment="center"
          scrollEventThrottle={16}
          keyExtractor={(item) => item.toString()}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={selectedDay - 1}
          style={{ margin: 50, paddingTop: 50, height: 120, width: 200 }}

        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 20,
    marginTop: 30,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 28,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', // Align icon and text horizontally
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10, // Add spacing between icon and text
    paddingRight: 10,
    alignItems: 'center',
    fontSize: 16, // Center text vertically
  },
  icon: {
    marginLeft: 10, // Add spacing between icon and text
    alignItems: 'center', // Center icon vertically
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  month: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  daysContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  day: {
    width: 40,
    height: 40,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedDay: {
    width: 40,
    height: 40,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  listContainer: {
    margin: 50,
    paddingTop: 50,
    height: 120,
    width: 200
  },
});
