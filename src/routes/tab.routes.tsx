import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home as HomeIcon, List, Plus } from '@tamagui/lucide-icons';

import { useColorScheme } from 'react-native';
import Home from '../screens/Home';
import NewDeposit from '../screens/NewDeposit';
import TransactionFeed from '../screens/TransactionFeed';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const colorScheme = useColorScheme()

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colorScheme === 'dark' ? '#10171F' : '#FBFDFF',
      },
      tabBarIcon: ({ focused }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? <HomeIcon color="$blue10" />
            : <HomeIcon color="$blue8" />
        } else if (route.name === 'NewDeposit') {
          iconName = focused
            ? <Plus color="$blue10" />
            : <Plus color="$blue8" />
        } else if (route.name === 'TransactionFeed') {
          iconName = focused
            ? <List color="$blue10" />
            : <List color="$blue8" />
        } 
        return iconName;
      },
      tabBarActiveTintColor: colorScheme === 'dark' ? '#FBFDFF' : '#10171F',
      tabBarInactiveTintColor: colorScheme === 'dark' ? '#FBFDFF' : '#10171F',
    })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Início',
        }}
      />
      <Tab.Screen
        name="TransactionFeed"
        component={TransactionFeed}
        options={{
          tabBarLabel: 'Suas transações',
        }}
      />
      <Tab.Screen
        name="NewDeposit"
        component={NewDeposit}
        options={{
          tabBarLabel: 'Adicionar saldo',
        }}
      />
    </Tab.Navigator>
  );
}