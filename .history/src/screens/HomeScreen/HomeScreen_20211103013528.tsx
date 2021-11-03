import React from 'react'
import { FlatList, View } from 'react-native'
import categories from '../../assets/data/categories'
import HomeCategory from '../../components/HomeCategory'
import styles from './styles'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* List of categories */}
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  )
}

export default HomeScreen
