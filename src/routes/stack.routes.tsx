import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Profile from '../screens/Profile'

const Stack = createNativeStackNavigator()

export default function DrawerRoutes() {
  return (
    <Stack.Navigator screenOptions={() => ({
      headerShown: false,      
    })}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        
      />
    </Stack.Navigator>
  )
}