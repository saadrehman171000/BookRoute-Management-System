import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Card, Text, Button, SegmentedButtons, useTheme } from 'react-native-paper';
import { BarChart, LineChart, PieChart } from 'react-native-chart-kit';

const ReportsScreen = () => {
  const [reportType, setReportType] = useState('daily');
  const theme = useTheme();
  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(37, 99, 235, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99],
      },
    ],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(37, 99, 235, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const pieData = [
    {
      name: 'Science',
      population: 215,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Math',
      population: 280,
      color: 'rgba(241, 133, 131, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'English',
      population: 190,
      color: 'rgba(145, 229, 156, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>Analytics Dashboard</Text>
          <SegmentedButtons
            value={reportType}
            onValueChange={setReportType}
            buttons={[
              { value: 'daily', label: 'Daily' },
              { value: 'weekly', label: 'Weekly' },
              { value: 'monthly', label: 'Monthly' },
            ]}
            style={styles.segmentedButtons}
          />
          
          <View style={styles.chartContainer}>
            <Text variant="titleMedium" style={styles.chartTitle}>Books Delivered</Text>
            <BarChart
              data={barData}
              width={screenWidth - 64}
              height={220}
              yAxisLabel=""
              yAxisSuffix=""
              chartConfig={chartConfig}
              style={styles.chart}
            />
          </View>

          <View style={styles.chartContainer}>
            <Text variant="titleMedium" style={styles.chartTitle}>Delivery Trend</Text>
            <LineChart
              data={lineData}
              width={screenWidth - 64}
              height={220}
              yAxisLabel=""
              chartConfig={chartConfig}
              bezier
              style={styles.chart}
            />
          </View>

          <View style={styles.chartContainer}>
            <Text variant="titleMedium" style={styles.chartTitle}>Book Categories</Text>
            <PieChart
              data={pieData}
              width={screenWidth - 64}
              height={220}
              chartConfig={chartConfig}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              style={styles.chart}
            />
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.sectionTitle}>Key Metrics</Text>
          <View style={styles.metricsContainer}>
            <View style={styles.metric}>
              <Text variant="headlineMedium">1,234</Text>
              <Text variant="bodyMedium">Total Books Delivered</Text>
            </View>
            <View style={styles.metric}>
              <Text variant="headlineMedium">56</Text>
              <Text variant="bodyMedium">Active Workers</Text>
            </View>
            <View style={styles.metric}>
              <Text variant="headlineMedium">98%</Text>
              <Text variant="bodyMedium">On-Time Deliveries</Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      <Button mode="contained" style={styles.exportButton}>
        Export Report
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 16,
    fontWeight: '600',
  },
  segmentedButtons: {
    marginBottom: 16,
  },
  chartContainer: {
    marginBottom: 24,
  },
  chartTitle: {
    marginBottom: 8,
    fontWeight: '500',
  },
  chart: {
    borderRadius: 16,
  },
  sectionTitle: {
    marginBottom: 16,
    fontWeight: '500',
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metric: {
    alignItems: 'center',
  },
  exportButton: {
    marginTop: 16,
  },
});

export default ReportsScreen;