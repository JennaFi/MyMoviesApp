import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import MovieDetailsScreen from '../screens/MovieDetailsScreen'

const HomeStack = createStackNavigator()

const TabOneNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false, title: '' }}
        />
        <HomeStack.Screen
          name="MovieDetailsScreen"
          component={MovieDetailsScreen}
          options={{ title: ''}}
        />
      </HomeStack.Navigator>
    </View>
  )
}

export default TabOneNavigator
