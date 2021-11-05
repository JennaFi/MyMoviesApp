import {
  DarkTheme,
  NavigationContainer,
  useTheme
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import BottomTabNavigator from './BottomTabNavigator'

const Navigation = () => {
  const { colors } = useTheme()
  // const myDarkTheme = {
  //   ...DarkTheme,
  //   colors: {
  //     ...DarkTheme.colors,
  //     headerColor: '#404040',
  //     iconColor: 'white',
  //     activeTabColor: 'white',
  //   },
  // }

  // const myDefaultTheme = {
  //   ...DefaultTheme,
  //   colors: {
  //     ...DefaultTheme.colors,
  //     headerColor: 'white',
  //     iconColor: 'black',
  //     activeTabColor: 'red',
  //   },
  // }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <NavigationContainer theme={DarkTheme}>
        <RootNavigator />
      </NavigationContainer>
    </View>
  )
}

const Stack = createStackNavigator()

const RootNavigator = () => {
  return (
    <View style={{ height: '100%' }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
      </Stack.Navigator>
    </View>
  )
}

export default Navigation
