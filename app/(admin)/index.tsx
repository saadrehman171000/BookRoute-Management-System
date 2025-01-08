import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Surface, Text, Card, Avatar, useTheme, Button } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AdminDashboard = () => {
  const theme = useTheme();
  const screenWidth = Dimensions.get('window').width;

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{
      data: [20, 45, 28, 80, 99, 43],
    }]
  };

  return (
    <ScrollView style={styles.container}>
      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        <Card style={styles.statsCard}>
          <Card.Content style={styles.statsContent}>
            <MaterialCommunityIcons name="account-group" size={24} color={theme.colors.primary} />
            <Text variant="titleLarge" style={styles.statsNumber}>24</Text>
            <Text variant="bodyMedium">Total Workers</Text>
          </Card.Content>
        </Card>

        <Card style={styles.statsCard}>
          <Card.Content style={styles.statsContent}>
            <MaterialCommunityIcons name="clipboard-check" size={24} color={theme.colors.primary} />
            <Text variant="titleLarge" style={styles.statsNumber}>156</Text>
            <Text variant="bodyMedium">Tasks Complete</Text>
          </Card.Content>
        </Card>

        <Card style={styles.statsCard}>
          <Card.Content style={styles.statsContent}>
            <MaterialCommunityIcons name="school" size={24} color={theme.colors.primary} />
            <Text variant="titleLarge" style={styles.statsNumber}>45</Text>
            <Text variant="bodyMedium">Schools</Text>
          </Card.Content>
        </Card>

        <Card style={styles.statsCard}>
          <Card.Content style={styles.statsContent}>
            <MaterialCommunityIcons name="book-open-page-variant" size={24} color={theme.colors.primary} />
            <Text variant="titleLarge" style={styles.statsNumber}>12</Text>
            <Text variant="bodyMedium">Publishers</Text>
          </Card.Content>
        </Card>
      </View>

      {/* Chart Card */}
      <Card style={styles.chartCard}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.chartTitle}>Task Completion Trend</Text>
          <LineChart
            data={chartData}
            width={screenWidth - 48}
            height={220}
            chartConfig={{
              backgroundColor: theme.colors.surface,
              backgroundGradientFrom: theme.colors.surface,
              backgroundGradientTo: theme.colors.surface,
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(37, 99, 235, ${opacity})`,
              labelColor: (opacity = 1) => theme.colors.onSurface + opacity,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: theme.colors.primary
              }
            }}
            bezier
            style={styles.chart}
          />
        </Card.Content>
      </Card>

      {/* Active Workers */}
      <Card style={styles.workersCard}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.sectionTitle}>Active Workers</Text>
          {[1, 2, 3].map((worker) => (
            <Surface key={worker} style={styles.workerItem} elevation={0}>
              <View style={styles.workerInfo}>
                <Avatar.Image
                  size={40}
                  source={{ uri: `https://ui-avatars.com/api/?name=Worker+${worker}&background=2563eb&color=fff` }}
                />
                <View style={styles.workerDetails}>
                  <Text variant="bodyLarge">Worker {worker}</Text>
                  <Text variant="bodySmall" style={styles.taskCount}>5 tasks in progress</Text>
                </View>
              </View>
              <Button 
                mode="contained-tonal" 
                compact 
                onPress={() => {}}
              >
                View
              </Button>
            </Surface>
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
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statsCard: {
    width: '48%',
    marginBottom: 16,
  },
  statsContent: {
    alignItems: 'center',
    padding: 16,
  },
  statsNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  chartCard: {
    marginBottom: 16,
  },
  chartTitle: {
    marginBottom: 16,
    fontWeight: '600',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  workersCard: {
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 16,
    fontWeight: '600',
  },
  workerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  workerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  workerDetails: {
    marginLeft: 12,
  },
  taskCount: {
    color: '#6b7280',
  },
});

export default AdminDashboard;