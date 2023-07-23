import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home, User } from '@tamagui/lucide-icons';
import { useColorScheme } from 'react-native';
import Profile from '../screens/Profile';
import TabRoutes from './tab.routes';

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  const colorScheme = useColorScheme()

  return (
    <Drawer.Navigator screenOptions={() => ({
      headerShown: true,
      headerStyle: {
        backgroundColor: colorScheme === 'dark' ? '#10171F' : '#FBFDFF',
        borderBottomColor: colorScheme === 'dark' ? '#10171F' : '#FBFDFF',
      },
      drawerStyle: {
        backgroundColor: colorScheme === 'dark' ? '#10171F' : '#FBFDFF',
      },
      drawerActiveTintColor: colorScheme === 'dark' ? '#FBFDFF' : '#10171F',
      drawerInactiveTintColor: colorScheme === 'dark' ? '#FBFDFF' : '#10171F',
      headerTitle: '',
    })}>
      <Drawer.Screen
        name="homeDrawer"
        component={TabRoutes}
        options={{
          drawerLabel: 'Início',
          drawerIcon: ({ focused }) => {
            let iconName;
            iconName = focused
              ? <Home color='$blue10' />
              : <Home color='$blue8' />
            return iconName;
          }
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: 'Seu perfil',
          drawerIcon: ({ focused }) => {
            let iconName;
            iconName = focused
              ? <User color='$blue10' />
              : <User color='$blue8' />
            return iconName;
          }
        }}
      />
    </Drawer.Navigator>
  )
}