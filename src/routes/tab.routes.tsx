import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home as HomeIcon, List, Plus } from 'lucide-react-native';

import Home from '../screens/Home';
import NewDeposit from '../screens/NewDeposit';
import TransactionFeed from '../screens/TransactionFeed';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? <HomeIcon color='#11455B' />
            : <HomeIcon color='#47515551' />
        } else if (route.name === 'NewDeposit') {
          iconName = focused
            ? <Plus color='#11455B' />
            : <Plus color='#47515551' />
        } else if (route.name === 'TransactionFeed') {
          iconName = focused
            ? <List color='#11455B' />
            : <List color='#47515551' />
        } 
        return iconName;
      },
      tabBarActiveTintColor: '#11455B',
      tabBarInactiveTintColor: '#47515551',
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
          tabBarLabel: 'Adicionar crédito',
        }}
      />
    </Tab.Navigator>
  );
}