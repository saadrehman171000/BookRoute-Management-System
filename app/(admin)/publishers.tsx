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

const PublishersScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useTheme();

  const publishers = [
    { id: 1, name: 'Javed Publishers', books: 15, activeDeliveries: 3 },
    { id: 2, name: 'Kids Publisher', books: 8, activeDeliveries: 2 },
    { id: 3, name: 'Academic Press', books: 20, activeDeliveries: 5 },
  ];

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search publishers"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />

      <ScrollView style={styles.scrollView}>
        {publishers.map((publisher) => (
          <Card key={publisher.id} style={styles.publisherCard}>
            <Card.Content>
              <View style={styles.publisherHeader}>
                <Avatar.Text size={40} label={publisher.name.substring(0, 2)} style={{ backgroundColor: theme.colors.primary }} />
                <View style={styles.publisherInfo}>
                  <Text variant="titleMedium">{publisher.name}</Text>
                  <Chip icon="book" style={styles.chip}>{publisher.books} Books</Chip>
                </View>
              </View>
              <View style={styles.deliveryInfo}>
                <MaterialCommunityIcons name="truck-delivery" size={20} color={theme.colors.primary} />
                <Text variant="bodyMedium" style={styles.deliveryText}>
                  {publisher.activeDeliveries} Active Deliveries
                </Text>
              </View>
              <View style={styles.actions}>
                <Button mode="outlined" onPress={() => {}}>View Books</Button>
                <Button mode="contained" onPress={() => {}}>Manage Inventory</Button>
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
          <Text variant="titleLarge" style={styles.modalTitle}>Add New Publisher</Text>
          <TextInput
            label="Publisher Name"
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Number of Books"
            mode="outlined"
            keyboardType="numeric"
            style={styles.input}
          />
          <View style={styles.modalActions}>
            <Button onPress={() => setModalVisible(false)}>Cancel</Button>
            <Button mode="contained" onPress={() => setModalVisible(false)}>
              Add Publisher
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
  publisherCard: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  publisherHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  publisherInfo: {
    marginLeft: 16,
    flex: 1,
  },
  chip: {
    marginTop: 8,
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

export default PublishersScreen;