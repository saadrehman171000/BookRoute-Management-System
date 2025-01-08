import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Card, Text, Button, Avatar, useTheme, ProgressBar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const WorkerDashboard = () => {
  const theme = useTheme();

  const todayTasks = [
    {
      id: 1,
      school: 'City Public School',
      books: 150,
      delivered: 105,
      type: 'Science Books',
      deadline: '2:00 PM',
    },
    {
      id: 2,
      school: "St. Mary's High School",
      books: 200,
      delivered: 180,
      type: 'Mathematics Books',
      deadline: '4:30 PM',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Worker Stats */}
      <Card style={styles.profileCard}>
        <Card.Content style={styles.profileContent}>
          <Avatar.Image
            size={80}
            source={{
              uri: 'https://ui-avatars.com/api/?name=John+Worker&background=22c55e&color=fff',
            }}
          />
          <View style={styles.profileInfo}>
            <Text variant="titleLarge">John Worker</Text>
            <Text variant="bodyMedium" style={styles.subtitle}>North Zone</Text>
            <View style={styles.statsRow}>
              <View style={styles.stat}>
                <Text variant="titleMedium">285</Text>
                <Text variant="bodySmall">Books Delivered</Text>
              </View>
              <View style={styles.stat}>
                <Text variant="titleMedium">12</Text>
                <Text variant="bodySmall">Schools Visited</Text>
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>

      {/* Today's Progress */}
      <Card style={styles.progressCard}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.sectionTitle}>Today's Progress</Text>
          <View style={styles.progressStats}>
            <View style={styles.progressStat}>
              <MaterialCommunityIcons 
                name="book-open-page-variant" 
                size={24} 
                color={theme.colors.primary} 
              />
              <Text variant="headlineMedium">350</Text>
              <Text variant="bodySmall">Books to Deliver</Text>
            </View>
            <View style={styles.progressStat}>
              <MaterialCommunityIcons 
                name="check-circle" 
                size={24} 
                color={'#22c55e'} 
              />
              <Text variant="headlineMedium">285</Text>
              <Text variant="bodySmall">Books Delivered</Text>
            </View>
            <View style={styles.progressStat}>
              <MaterialCommunityIcons 
                name="school" 
                size={24} 
                color={'#f59e0b'} 
              />
              <Text variant="headlineMedium">2</Text>
              <Text variant="bodySmall">Schools Remaining</Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      {/* Today's Tasks */}
      <Card style={styles.tasksCard}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.sectionTitle}>Today's Tasks</Text>
          {todayTasks.map((task) => (
            <View key={task.id} style={styles.taskItem}>
              <View style={styles.taskHeader}>
                <Text variant="bodyLarge" style={styles.schoolName}>{task.school}</Text>
                <Text variant="bodySmall" style={styles.deadline}>Due by {task.deadline}</Text>
              </View>
              <Text variant="bodyMedium" style={styles.bookType}>{task.type}</Text>
              <View style={styles.progressSection}>
                <View style={styles.progressHeader}>
                  <Text variant="bodySmall">Progress</Text>
                  <Text variant="bodySmall">
                    {task.delivered} / {task.books} books
                  </Text>
                </View>
                <ProgressBar
                  progress={task.delivered / task.books}
                  color={theme.colors.primary}
                  style={styles.progressBar}
                />
              </View>
              <Button 
                mode="contained" 
                onPress={() => {}}
                style={styles.updateButton}
              >
                Update Progress
              </Button>
            </View>
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
  },
  profileCard: {
    marginBottom: 16,
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  subtitle: {
    color: '#6b7280',
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 24,
  },
  stat: {
    alignItems: 'center',
  },
  progressCard: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: '600',
    marginBottom: 16,
  },
  progressStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  progressStat: {
    alignItems: 'center',
    flex: 1,
  },
  tasksCard: {
    marginBottom: 16,
  },
  taskItem: {
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  schoolName: {
    fontWeight: '600',
  },
  deadline: {
    color: '#6b7280',
  },
  bookType: {
    color: '#6b7280',
    marginBottom: 12,
  },
  progressSection: {
    marginBottom: 12,
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
  updateButton: {
    marginTop: 8,
  },
});

export default WorkerDashboard;