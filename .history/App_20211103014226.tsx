/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react'
import { SafeAreaView, useColorScheme, View } from 'react-native'
import 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import MovieDetailsScreen from './src/screens/MovieDetailsScreen'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}

      <View
        // style={{
        //   backgroundColor: isDarkMode ? Colors.black : Colors.white,
        // }}>
        {/* <Navigation /> */}
        <MovieDetailsScreen />
      </View>
    </SafeAreaView>
  )
}

export default App
