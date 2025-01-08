import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button, Searchbar, useTheme, DataTable } from 'react-native-paper';
import { Link } from 'expo-router';

const WorkersScreen = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with actual data fetching logic
  const workers = [
    { id: '1', name: 'Worker 1', publisher: 'ABC Publishers', activeTasks: 3, totalDeliveries: 150 },
    { id: '2', name: 'Worker 2', publisher: 'XYZ Books', activeTasks: 2, totalDeliveries: 200 },
    { id: '3', name: 'Worker 3', publisher: '123 Educational', activeTasks: 1, totalDeliveries: 100 },
  ];

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search workers"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Publisher</DataTable.Title>
            <DataTable.Title numeric>Active Tasks</DataTable.Title>
            <DataTable.Title numeric>Total Deliveries</DataTable.Title>
            <DataTable.Title>Actions</DataTable.Title>
          </DataTable.Header>

          {workers.map((worker) => (
            <DataTable.Row key={worker.id}>
              <DataTable.Cell>{worker.name}</DataTable.Cell>
              <DataTable.Cell>{worker.publisher}</DataTable.Cell>
              <DataTable.Cell numeric>{worker.activeTasks}</DataTable.Cell>
              <DataTable.Cell numeric>{worker.totalDeliveries}</DataTable.Cell>
              <DataTable.Cell>
                <Button mode="contained" onPress={() => {/* View worker details */}}>
                  View
                </Button>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    marginBottom: 16,
  },
});

export default WorkersScreen;