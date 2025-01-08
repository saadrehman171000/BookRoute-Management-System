import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button, Searchbar, FAB, useTheme, DataTable } from 'react-native-paper';
import { Link } from 'expo-router';

const PublishersScreen = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with actual data fetching logic
  const publishers = [
    { id: '1', name: 'ABC Publishers', adminName: 'John Doe', workersCount: 10, booksCount: 500 },
    { id: '2', name: 'XYZ Books', adminName: 'Jane Smith', workersCount: 15, booksCount: 750 },
    { id: '3', name: '123 Educational', adminName: 'Bob Johnson', workersCount: 7, booksCount: 300 },
  ];

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search publishers"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Admin</DataTable.Title>
            <DataTable.Title numeric>Workers</DataTable.Title>
            <DataTable.Title numeric>Books</DataTable.Title>
            <DataTable.Title>Actions</DataTable.Title>
          </DataTable.Header>

          {publishers.map((publisher) => (
            <DataTable.Row key={publisher.id}>
              <DataTable.Cell>{publisher.name}</DataTable.Cell>
              <DataTable.Cell>{publisher.adminName}</DataTable.Cell>
              <DataTable.Cell numeric>{publisher.workersCount}</DataTable.Cell>
              <DataTable.Cell numeric>{publisher.booksCount}</DataTable.Cell>
              <DataTable.Cell>
                <Button mode="contained" onPress={() => {/* View publisher details */}}>
                  View
                </Button>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {/* Navigate to add publisher screen */}}
      />
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default PublishersScreen;