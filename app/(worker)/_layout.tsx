import { Drawer } from 'expo-router/drawer';
import { useTheme } from 'react-native-paper';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Drawer as PaperDrawer,
  Text,
} from 'react-native-paper';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <View style={styles.userRow}>
            <Avatar.Image
              source={{
                uri: 'https://ui-avatars.com/api/?name=Worker+User&background=22C55E&color=fff',
              }}
              size={50}
            />
            <View style={styles.userInfo}>
              <Title style={styles.title}>Worker Name</Title>
              <Caption style={styles.caption}>ID: WRK001</Caption>
            </View>
          </View>
        </View>

        <PaperDrawer.Section style={styles.drawerSection}>
          <PaperDrawer.Item
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="view-dashboard"
                size={size}
                color={color}
              />
            )}
            label="Dashboard"
            onPress={() => props.navigation.navigate('dashboard')}
          />
          <PaperDrawer.Item
            icon={({ color, size }) => (
              <Feather name="clipboard" size={size} color={color} />
            )}
            label="My Tasks"
            onPress={() => props.navigation.navigate('tasks')}
          />
          <PaperDrawer.Item
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="message-text"
                size={size}
                color={color}
              />
            )}
            label="Feedback"
            onPress={() => props.navigation.navigate('feedback')}
          />
        </PaperDrawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

export default function WorkerLayout() {
  const theme = useTheme();

  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: '#22c55e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerStyle: {
          backgroundColor: '#fff',
          width: 280,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="dashboard"
        options={{
          title: 'Worker Dashboard',
          drawerLabel: 'Dashboard',
        }}
      />
      <Drawer.Screen
        name="tasks"
        options={{
          title: 'My Tasks',
          drawerLabel: 'Tasks',
        }}
      />
      <Drawer.Screen
        name="feedback"
        options={{
          title: 'Submit Feedback',
          drawerLabel: 'Feedback',
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 12,
    backgroundColor: '#22c55e',
    marginBottom: 12,
  },
  userRow: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  userInfo: {
    marginLeft: 15,
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: '#fff',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: '#fff',
  },
  drawerSection: {
    marginTop: 15,
  },
});