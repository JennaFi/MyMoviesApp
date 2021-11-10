import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createStackNavigator()

const TabTwoNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default TabTwoNavigator
