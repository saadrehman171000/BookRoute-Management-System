import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {
  Searchbar,
  Card,
  Avatar,
  Text,
  Button,
  Chip,
  FAB,
  Portal,
  Modal,
  TextInput,
  useTheme,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const getStatusColor = (status: string, opacity: string = '100') => {
  return status === 'Active' 
    ? `rgba(34, 197, 94, 0.${opacity})` // success green
    : `rgba(239, 68, 68, 0.${opacity})`; // error red
};

const WorkersScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  const workers = [
    { id: 1, name: 'John Doe', status: 'Active', tasks: 5, area: 'North Zone' },
    { id: 2, name: 'Jane Smith', status: 'Inactive', tasks: 0, area: 'South Zone' },
    { id: 3, name: 'Mike Johnson', status: 'Active', tasks: 3, area: 'East Zone' },
    { id: 4, name: 'Sarah Williams', status: 'Active', tasks: 7, area: 'West Zone' },
  ];

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search workers"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
        elevation={2}
      />

      <ScrollView style={styles.scrollView}>
        {workers.map((worker) => (
          <Card key={worker.id} style={styles.workerCard}>
            <Card.Content>
              <View style={styles.workerHeader}>
                <View style={styles.workerInfo}>
                  <Avatar.Image
                    size={50}
                    source={{
                      uri: `https://ui-avatars.com/api/?name=${worker.name}&background=2563eb&color=fff`,
                    }}
                  />
                  <View style={styles.workerDetails}>
                    <Text variant="titleMedium">{worker.name}</Text>
                    <Text variant="bodySmall" style={styles.areaText}>
                      {worker.area}
                    </Text>
                  </View>
                </View>
                <Chip
                  icon={worker.status === 'Active' ? 'check-circle' : 'clock'}
                  style={{
                    backgroundColor: getStatusColor(worker.status, '20')
                  }}
                  textStyle={{
                    color: getStatusColor(worker.status)
                  }}
                >
                  {worker.status}
                </Chip>
              </View>

              <View style={styles.statsContainer}>
                <View style={styles.stat}>
                  <MaterialCommunityIcons
                    name="clipboard-check"
                    size={20}
                    color={theme.colors.primary}
                  />
                  <Text variant="bodyMedium" style={styles.statText}>
                    {worker.tasks} Active Tasks
                  </Text>
                </View>
              </View>

              <View style={styles.actions}>
                <Button
                  mode="contained-tonal"
                  onPress={() => {}}
                  style={styles.actionButton}
                >
                  View Details
                </Button>
                <Button
                  mode="contained"
                  onPress={() => {}}
                  style={styles.actionButton}
                >
                  Assign Task
                </Button>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          contentContainerStyle={styles.modal}
        >
          <Text variant="titleLarge" style={styles.modalTitle}>
            Add New Worker
          </Text>
          <TextInput
            label="Full Name"
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Email"
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Phone"
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Area"
            mode="outlined"
            style={styles.input}
          />
          <View style={styles.modalActions}>
            <Button onPress={() => setVisible(false)}>Cancel</Button>
            <Button mode="contained" onPress={() => setVisible(false)}>
              Add Worker
            </Button>
          </View>
        </Modal>
      </Portal>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => setVisible(true)}
        label="Add Worker"
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
  workerCard: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  workerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  workerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  workerDetails: {
    marginLeft: 12,
  },
  areaText: {
    color: '#6b7280',
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  statText: {
    marginLeft: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionButton: {
    marginLeft: 8,
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

export default WorkersScreen;