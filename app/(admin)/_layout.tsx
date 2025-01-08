import { Drawer } from 'expo-router/drawer';
import { useTheme } from 'react-native-paper';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer as PaperDrawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
} from '@expo/vector-icons';

function CustomDrawerContent(props: any) {
  const theme = useTheme();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <View style={styles.userRow}>
            <Avatar.Image
              source={{
                uri: 'https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff',
              }}
              size={50}
            />
            <View style={styles.userInfo}>
              <Title style={styles.title}>Admin User</Title>
              <Caption style={styles.caption}>admin@bookroute.com</Caption>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>24</Paragraph>
              <Caption style={styles.caption}>Workers</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>45</Paragraph>
              <Caption style={styles.caption}>Tasks</Caption>
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
            onPress={() => props.navigation.navigate('index')}
          />
          <PaperDrawer.Item
            icon={({ color, size }) => (
              <FontAwesome5 name="users" size={size} color={color} />
            )}
            label="Workers"
            onPress={() => props.navigation.navigate('workers')}
          />
          <PaperDrawer.Item
            icon={({ color, size }) => (
              <Feather name="clipboard" size={size} color={color} />
            )}
            label="Tasks"
            onPress={() => props.navigation.navigate('tasks')}
          />
          <PaperDrawer.Item
            icon={({ color, size }) => (
              <FontAwesome5 name="school" size={size} color={color} />
            )}
            label="Schools"
            onPress={() => props.navigation.navigate('schools')}
          />
          <PaperDrawer.Item
            icon={({ color, size }) => (
              <Feather name="book" size={size} color={color} />
            )}
            label="Publishers"
            onPress={() => props.navigation.navigate('publishers')}
          />
          <PaperDrawer.Item
            icon={({ color, size }) => (
              <Feather name="bar-chart-2" size={size} color={color} />
            )}
            label="Reports"
            onPress={() => props.navigation.navigate('reports')}
          />
        </PaperDrawer.Section>

        <PaperDrawer.Section title="Preferences">
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Push Notifications</Text>
              <View pointerEvents="none">
                <Switch value={true} />
              </View>
            </View>
          </TouchableRipple>
        </PaperDrawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

export default function AdminLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2563eb',
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
        name="index"
        options={{
          title: 'Dashboard',
          drawerLabel: 'Dashboard',
        }}
      />
      <Drawer.Screen
        name="workers"
        options={{
          title: 'Workers',
          drawerLabel: 'Workers',
        }}
      />
      <Drawer.Screen
        name="tasks"
        options={{
          title: 'Tasks',
          drawerLabel: 'Tasks',
        }}
      />
      <Drawer.Screen
        name="schools"
        options={{
          title: 'Schools',
          drawerLabel: 'Schools',
        }}
      />
      <Drawer.Screen
        name="publishers"
        options={{
          title: 'Publishers',
          drawerLabel: 'Publishers',
        }}
      />
      <Drawer.Screen
        name="reports"
        options={{
          title: 'Reports',
          drawerLabel: 'Reports',
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
    backgroundColor: '#2563eb',
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
  statsRow: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});