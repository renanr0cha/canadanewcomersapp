import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home, User } from 'lucide-react-native';
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
              ? <Home color='#11455B' />
              : <Home color='#47515551' />
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
              ? <User color='#11455B' />
              : <User color='#47515551' />
            return iconName;
          }
        }}
      />
    </Drawer.Navigator>
  )
}