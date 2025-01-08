import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {
  Card,
  Text,
  Button,
  Searchbar,
  Avatar,
  Chip,
  FAB,
  Portal,
  Modal,
  TextInput,
  useTheme,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SchoolsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useTheme();

  const schools = [
    { id: 1, name: 'City Public School', address: '123 Main St, City', activeDeliveries: 2 },
    { id: 2, name: "St. Mary's High School", address: '456 Oak Ave, Town', activeDeliveries: 1 },
    { id: 3, name: 'Modern Academy', address: '789 Pine Rd, Village', activeDeliveries: 3 },
  ];

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search schools"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />

      <ScrollView style={styles.scrollView}>
        {schools.map((school) => (
          <Card key={school.id} style={styles.schoolCard}>
            <Card.Content>
              <View style={styles.schoolHeader}>
                <Avatar.Icon size={40} icon="school" style={{ backgroundColor: theme.colors.primary }} />
                <View style={styles.schoolInfo}>
                  <Text variant="titleMedium">{school.name}</Text>
                  <Text variant="bodySmall" style={styles.address}>{school.address}</Text>
                </View>
              </View>
              <View style={styles.deliveryInfo}>
                <MaterialCommunityIcons name="truck-delivery" size={20} color={theme.colors.primary} />
                <Text variant="bodyMedium" style={styles.deliveryText}>
                  {school.activeDeliveries} Active Deliveries
                </Text>
              </View>
              <View style={styles.actions}>
                <Button mode="outlined" onPress={() => {}}>View Details</Button>
                <Button mode="contained" onPress={() => {}}>Assign Task</Button>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          contentContainerStyle={styles.modal}
        >
          <Text variant="titleLarge" style={styles.modalTitle}>Add New School</Text>
          <TextInput
            label="School Name"
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Address"
            mode="outlined"
            style={styles.input}
          />
          <View style={styles.modalActions}>
            <Button onPress={() => setModalVisible(false)}>Cancel</Button>
            <Button mode="contained" onPress={() => setModalVisible(false)}>
              Add School
            </Button>
          </View>
        </Modal>
      </Portal>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  searchbar: {
    margin: 16,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  schoolCard: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  schoolHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  schoolInfo: {
    marginLeft: 16,
    flex: 1,
  },
  address: {
    color: '#6b7280',
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  deliveryText: {
    marginLeft: 8,
    color: '#6b7280',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  modalTitle: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 12,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
});

export default SchoolsScreen;