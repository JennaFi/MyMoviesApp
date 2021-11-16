import Auth from '@aws-amplify/auth'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const ProfileScreen = () => {
  const onLogout  = () => {
    Auth.signOut()
  }
  return (
    <View>
      <Text>Profile</Text>
      <Pressable onPress={onLogout} style={{padding: 10, backgroundColor: 'white'}}>
        <Text>Log Out</Text>
      </Pressable>
    </View>
  )
}

export default ProfileScreen
