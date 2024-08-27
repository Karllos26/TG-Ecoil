import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput, Button } from 'react-native';
import { Agenda } from 'react-native-calendars';

// Define a interface para os itens da agenda
interface AgendaItem {
  name: string;
  time: string;
  location?: string;
  description?: string;
}

export default function Tab() {
  // Define o estado usando a interface AgendaItem
  const [items, setItems] = useState<Record<string, AgendaItem[]>>({
    '2024-08-29': [{ name: 'Meeting with client', time: '10:00 AM', location: 'Office', description: 'Discuss project updates' }],
    '2024-08-30': [
      { name: 'Team brainstorming session', time: '9:00 AM', location: 'Conference Room', description: 'Ideas for the new campaign' },
      { name: 'Project presentation', time: '2:00 PM', location: 'Online', description: 'Present project results to stakeholders' },
      { name: 'Project presentation', time: '5:00 PM', location: 'Online', description: 'Another presentation session' }
    ],
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AgendaItem | null>(null);

  // Estado para o formulário de criação de agendamento
  const [newItem, setNewItem] = useState<AgendaItem>({
    name: '',
    time: '',
    location: '',
    description: ''
  });
  const [selectedDate, setSelectedDate] = useState<string>('');

  const renderEmptyData = () => {
    return (
      <View style={styles.emptyDataContainer}>
        <Text>No events for this day</Text>
      </View>
    );
  };

  const handleItemPress = (item: AgendaItem) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleAddItem = () => {
    if (!selectedDate) return;

    setItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (!updatedItems[selectedDate]) {
        updatedItems[selectedDate] = [];
      }
      updatedItems[selectedDate].push(newItem);
      return updatedItems;
    });

    // Resetar o formulário
    setNewItem({ name: '', time: '', location: '', description: '' });
    setSelectedDate('');
    setCreateModalVisible(false);
  };

  return (
    <View style={{ flex: 1, marginHorizontal: 10, marginTop: 60 }}>
      
      {/* Botão para adicionar um novo agendamento */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setCreateModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Add New Event</Text>
      </TouchableOpacity>
      
      <Agenda
        items={items}
        showOnlySelectedDayItems={true}
        renderEmptyData={renderEmptyData}
        renderItem={(item: AgendaItem) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
            <View style={styles.itemContainer}>
              <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
              <Text>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
        theme={{
          selectedDayBackgroundColor: 'green',
          todayTextColor: 'green',
          arrowColor: 'green',
        }}
      />

      {/* Modal para visualizar o item */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{selectedItem?.name}</Text>
            <Text style={styles.modalText}>Time: {selectedItem?.time}</Text>
            <Text style={styles.modalText}>Location: {selectedItem?.location}</Text>
            <Text style={styles.modalText}>Description: {selectedItem?.description}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para adicionar novo item */}
      <Modal
        transparent={true}
        visible={createModalVisible}
        animationType="slide"
        onRequestClose={() => setCreateModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add New Event</Text>

            <TextInput
              style={styles.input}
              placeholder="Event Name"
              value={newItem.name}
              onChangeText={(text) => setNewItem((prev) => ({ ...prev, name: text }))}
            />
            <TextInput
              style={styles.input}
              placeholder="Time"
              value={newItem.time}
              onChangeText={(text) => setNewItem((prev) => ({ ...prev, time: text }))}
            />
            <TextInput
              style={styles.input}
              placeholder="Location"
              value={newItem.location}
              onChangeText={(text) => setNewItem((prev) => ({ ...prev, location: text }))}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={newItem.description}
              onChangeText={(text) => setNewItem((prev) => ({ ...prev, description: text }))}
            />
            <TextInput
              style={styles.input}
              placeholder="Date (YYYY-MM-DD)"
              value={selectedDate}
              onChangeText={(text) => setSelectedDate(text)}
            />

            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddItem}
            >
              <Text style={styles.addButtonText}>Add Event</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setCreateModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  itemContainer: {
    marginVertical: 10,
    marginTop: 30,
    backgroundColor: 'white',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10, // Arredonda os cantos dos itens
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // Sombra para Android
  },
  emptyDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escurecido
  },
  modalContainer: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 20, // Arredonda os cantos do modal
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // Sombra para Android
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
