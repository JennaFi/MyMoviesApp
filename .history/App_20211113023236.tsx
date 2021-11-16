/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import Amplify from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'
import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import config from './aws-exports'
import Navigation from './src/navigation'


Amplify.configure(config)

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Navigation />
      {/* <MovieDetailsScreen /> */}
    </SafeAreaView>
  )
}

export default withAuthenticator(App)
