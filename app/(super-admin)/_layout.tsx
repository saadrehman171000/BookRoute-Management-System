import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SuperAdminLayout() {
  const theme = useTheme();

  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerStyle: {
          backgroundColor: '#fff',
          width: 280,
        },
        drawerActiveTintColor: theme.colors.primary,
      }}
    >
      <Drawer.Screen
        name="dashboard"
        options={{
          title: 'Super Admin Dashboard',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="admins"
        options={{
          title: 'Manage Admins',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-tie" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="reports"
        options={{
          title: 'System Reports',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-bar" color={color} size={size} />
          ),
        }}
      />
    </Drawer>
  );
}