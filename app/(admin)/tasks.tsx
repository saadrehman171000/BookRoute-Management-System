import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {
  Card,
  Text,
  Button,
  Chip,
  ProgressBar,
  Searchbar,
  useTheme,
  Avatar,
  IconButton,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TasksScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();

  const tasks = [
    {
      id: 1,
      title: 'Distribute Science Books',
      school: 'City Public School',
      worker: 'John Doe',
      status: 'In Progress',
      progress: 0.7,
      books: 150,
      delivered: 105,
    },
    {
      id: 2,
      title: 'Collect Feedback Forms',
      school: "St. Mary's High School",
      worker: 'Jane Smith',
      status: 'Pending',
      progress: 0,
      books: 200,
      delivered: 0,
    },
    {
      id: 3,
      title: 'Mathematics Book Distribution',
      school: 'Modern Academy',
      worker: 'Mike Johnson',
      status: 'Completed',
      progress: 1,
      books: 175,
      delivered: 175,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return '#22c55e';
      case 'In Progress':
        return '#2563eb';
      default:
        return '#f59e0b';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Searchbar
          placeholder="Search tasks"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchbar}
        />
        <IconButton
          icon="filter-variant"
          size={24}
          onPress={() => {}}
          style={styles.filterButton}
        />
      </View>

      <ScrollView style={styles.scrollView}>
        {tasks.map((task) => (
          <Card key={task.id} style={styles.taskCard}>
            <Card.Content>
              <View style={styles.taskHeader}>
                <View style={styles.titleContainer}>
                  <Text variant="titleMedium">{task.title}</Text>
                  <Chip
                    style={[
                      styles.statusChip,
                      { backgroundColor: getStatusColor(task.status) + '20' },
                    ]}
                    textStyle={{ color: getStatusColor(task.status) }}
                  >
                    {task.status}
                  </Chip>
                </View>
                <IconButton
                  icon="dots-vertical"
                  size={20}
                  onPress={() => {}}
                />
              </View>

              <View style={styles.schoolInfo}>
                <MaterialCommunityIcons
                  name="school"
                  size={20}
                  color={theme.colors.primary}
                />
                <Text variant="bodyMedium" style={styles.schoolName}>
                  {task.school}
                </Text>
              </View>

              <View style={styles.progressSection}>
                <View style={styles.progressHeader}>
                  <Text variant="bodyMedium">Progress</Text>
                  <Text variant="bodyMedium">
                    {task.delivered} / {task.books} books
                  </Text>
                </View>
                <ProgressBar
                  progress={task.progress}
                  color={getStatusColor(task.status)}
                  style={styles.progressBar}
                />
              </View>

              <View style={styles.workerSection}>
                <Avatar.Image
                  size={30}
                  source={{
                    uri: `https://ui-avatars.com/api/?name=${task.worker}&background=2563eb&color=fff`,
                  }}
                />
                <Text variant="bodyMedium" style={styles.workerName}>
                  {task.worker}
                </Text>
              </View>

              <View style={styles.actions}>
                <Button
                  mode="outlined"
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
                  Update Status
                </Button>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  searchbar: {
    flex: 1,
    backgroundColor: '#fff',
  },
  filterButton: {
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  taskCard: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusChip: {
    height: 24,
  },
  schoolInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  schoolName: {
    marginLeft: 8,
    color: '#6b7280',
  },
  progressSection: {
    marginBottom: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
  },
  workerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  workerName: {
    marginLeft: 8,
    color: '#6b7280',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionButton: {
    marginLeft: 8,
  },
});

export default TasksScreen;