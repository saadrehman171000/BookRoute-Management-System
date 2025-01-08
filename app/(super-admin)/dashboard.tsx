import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SuperAdminDashboard = () => {
  const theme = useTheme();

  const stats: { title: string; value: number; icon: keyof typeof MaterialCommunityIcons.glyphMap }[] = [
    { title: 'Total Admins', value: 15, icon: 'account-tie' },
    { title: 'Total Workers', value: 150, icon: 'account-group' },
    { title: 'Active Tasks', value: 75, icon: 'clipboard-check' },
    { title: 'Total Books Delivered', value: 10000, icon: 'book-open-variant' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Super Admin Dashboard</Title>

      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <Card key={index} style={styles.statCard}>
            <Card.Content>
              <MaterialCommunityIcons
                name={stat.icon}
                size={32}
                color={theme.colors.primary}
              />
              <Title>{stat.value}</Title>
              <Paragraph>{stat.title}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </View>

      <Card style={styles.actionCard}>
        <Card.Content>
          <Title>Quick Actions</Title>
          <Button
            mode="contained"
            icon="account-plus"
            onPress={() => {/* Navigate to add admin screen */}}
            style={styles.button}
          >
            Add New Admin
          </Button>
          <Button
            mode="contained"
            icon="file-document"
            onPress={() => {/* Navigate to generate report screen */}}
            style={styles.button}
          >
            Generate System Report
          </Button>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statCard: {
    width: '48%',
    marginBottom: 16,
  },
  actionCard: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
});

export default SuperAdminDashboard;