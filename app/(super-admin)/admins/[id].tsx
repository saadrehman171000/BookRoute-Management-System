import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Card, Title, Paragraph, Button, List, useTheme } from 'react-native-paper';

const AdminDetails = () => {
  const { id } = useLocalSearchParams();
  const theme = useTheme();

  // Mock data - replace with actual data fetching logic
  const admin = {
    id,
    name: 'John Doe',
    company: 'ABC Publishers',
    email: 'john@abcpublishers.com',
    phone: '+1 234 567 8900',
    workersCount: 10,
    activeTasksCount: 5,
    totalBooksDelivered: 1000,
  };

  const workers = [
    { id: '1', name: 'Worker 1', activeTasks: 2 },
    { id: '2', name: 'Worker 2', activeTasks: 1 },
    { id: '3', name: 'Worker 3', activeTasks: 3 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>{admin.name}</Title>
          <Paragraph>{admin.company}</Paragraph>
          <List.Item
            title="Email"
            description={admin.email}
            left={props => <List.Icon {...props} icon="email" />}
          />
          <List.Item
            title="Phone"
            description={admin.phone}
            left={props => <List.Icon {...props} icon="phone" />}
          />
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Title>{admin.workersCount}</Title>
              <Paragraph>Workers</Paragraph>
            </View>
            <View style={styles.stat}>
              <Title>{admin.activeTasksCount}</Title>
              <Paragraph>Active Tasks</Paragraph>
            </View>
            <View style={styles.stat}>
              <Title>{admin.totalBooksDelivered}</Title>
              <Paragraph>Books Delivered</Paragraph>
            </View>
          </View>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => {/* Edit admin details */}}>
            Edit Details
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Workers</Title>
          {workers.map((worker) => (
            <List.Item
              key={worker.id}
              title={worker.name}
              description={`${worker.activeTasks} active tasks`}
              left={props => <List.Icon {...props} icon="account" />}
              right={props => <Button mode="text">View</Button>}
            />
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  stat: {
    alignItems: 'center',
  },
});

export default AdminDetails;