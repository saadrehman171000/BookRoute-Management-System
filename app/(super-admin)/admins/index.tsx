import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button, Searchbar, FAB, useTheme } from 'react-native-paper';
import { Link } from 'expo-router';

const AdminList = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = React.useState('');

  // Mock data - replace with actual data fetching logic
  const admins = [
    { id: '1', name: 'John Doe', company: 'ABC Publishers', workersCount: 10, activeTasksCount: 5 },
    { id: '2', name: 'Jane Smith', company: 'XYZ Books', workersCount: 15, activeTasksCount: 8 },
    { id: '3', name: 'Bob Johnson', company: '123 Educational', workersCount: 7, activeTasksCount: 3 },
  ];

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search admins"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />
      <ScrollView>
        {admins.map((admin) => (
          <Card key={admin.id} style={styles.card}>
            <Card.Content>
              <Title>{admin.name}</Title>
              <Paragraph>{admin.company}</Paragraph>
              <View style={styles.statsContainer}>
                <Paragraph>Workers: {admin.workersCount}</Paragraph>
                <Paragraph>Active Tasks: {admin.activeTasksCount}</Paragraph>
              </View>
            </Card.Content>
            <Card.Actions>
              <Link 
                href={{
                  pathname: "/(super-admin)/admins/[id]",
                  params: { id: admin.id }
                }}
                asChild
              >
                <Button mode="contained">View Details</Button>
              </Link>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {/* Navigate to add admin screen */}}
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
  card: {
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default AdminList;