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
  SegmentedButtons,
  Portal,
  Modal,
  TextInput,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Task = {
  id: number;
  school: string;
  type: string;
  total: number;
  delivered: number;
  deadline: string;
  status: string;
};

const TasksScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('ongoing');
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [booksDelivered, setBooksDelivered] = useState('');
  
  const theme = useTheme();

  const tasks = [
    {
      id: 1,
      school: 'City Public School',
      type: 'Science Books - Grade 8',
      total: 150,
      delivered: 105,
      deadline: '2:00 PM Today',
      status: 'ongoing',
    },
    {
      id: 2,
      school: "St. Mary's High School",
      type: 'Mathematics Books - Grade 10',
      total: 200,
      delivered: 200,
      deadline: 'Completed',
      status: 'completed',
    },
    {
      id: 3,
      school: 'Modern Academy',
      type: 'English Books - Grade 6',
      total: 175,
      delivered: 0,
      deadline: '3:00 PM Tomorrow',
      status: 'upcoming',
    },
  ];

  const handleUpdateTask = (task: any) => {
    setSelectedTask(task);
    setBooksDelivered(task.delivered.toString());
    setUpdateModalVisible(true);
  };

  const filteredTasks = tasks.filter(task => 
    task.status === filter &&
    (task.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
     task.type.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search tasks"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />

      <SegmentedButtons
        value={filter}
        onValueChange={setFilter}
        buttons={[
          { value: 'ongoing', label: 'Ongoing' },
          { value: 'upcoming', label: 'Upcoming' },
          { value: 'completed', label: 'Completed' },
        ]}
        style={styles.filterButtons}
      />

      <ScrollView style={styles.scrollView}>
        {filteredTasks.map((task) => (
          <Card key={task.id} style={styles.taskCard}>
            <Card.Content>
              <View style={styles.taskHeader}>
                <Text variant="titleMedium">{task.school}</Text>
                <Chip
                  icon={() => (
                    <MaterialCommunityIcons
                      name={
                        task.status === 'completed'
                          ? 'check-circle'
                          : task.status === 'ongoing'
                          ? 'progress-clock'
                          : 'clock-outline'
                      }
                      size={16}
                      color={
                        task.status === 'completed'
                          ? '#22c55e'
                          : task.status === 'ongoing'
                          ? '#2563eb'
                          : '#f59e0b'
                      }
                    />
                  )}
                  style={styles.statusChip}
                >
                  {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                </Chip>
              </View>

              <Text variant="bodyMedium" style={styles.bookType}>
                {task.type}
              </Text>

              <View style={styles.progressSection}>
                <View style={styles.progressHeader}>
                  <Text variant="bodyMedium">Progress</Text>
                  <Text variant="bodyMedium">
                    {task.delivered} / {task.total} books
                  </Text>
                </View>
                <ProgressBar
                  progress={task.delivered / task.total}
                  color={
                    task.status === 'completed'
                      ? '#22c55e'
                      : '#2563eb'
                  }
                  style={styles.progressBar}
                />
              </View>

              <View style={styles.taskFooter}>
                <View style={styles.deadline}>
                  <MaterialCommunityIcons
                    name="clock-outline"
                    size={16}
                    color={theme.colors.primary}
                  />
                  <Text variant="bodySmall" style={styles.deadlineText}>
                    {task.deadline}
                  </Text>
                </View>
                {task.status === 'ongoing' && (
                  <Button
                    mode="contained"
                    onPress={() => handleUpdateTask(task)}
                  >
                    Update Progress
                  </Button>
                )}
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      <Portal>
        <Modal
          visible={updateModalVisible}
          onDismiss={() => setUpdateModalVisible(false)}
          contentContainerStyle={styles.modal}
        >
          <Text variant="titleLarge" style={styles.modalTitle}>
            Update Task Progress
          </Text>
          <Text variant="bodyMedium" style={styles.modalSchool}>
            {selectedTask?.school}
          </Text>
          <TextInput
            label="Books Delivered"
            value={booksDelivered}
            onChangeText={setBooksDelivered}
            keyboardType="numeric"
            mode="outlined"
            style={styles.input}
          />
          <View style={styles.modalActions}>
            <Button onPress={() => setUpdateModalVisible(false)}>Cancel</Button>
            <Button mode="contained" onPress={() => setUpdateModalVisible(false)}>
              Update
            </Button>
          </View>
        </Modal>
      </Portal>
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
  filterButtons: {
    marginHorizontal: 16,
    marginBottom: 16,
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
    alignItems: 'center',
    marginBottom: 8,
  },
  statusChip: {
    height: 28,
  },
  bookType: {
    color: '#6b7280',
    marginBottom: 16,
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
  taskFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deadline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deadlineText: {
    marginLeft: 4,
    color: '#6b7280',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  modalTitle: {
    marginBottom: 8,
  },
  modalSchool: {
    color: '#6b7280',
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
});

export default TasksScreen;