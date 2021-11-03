import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import movie from '../../assets/data/movie'
import EpisodeItem from '../../components/EpisodeItem'
import styles from './styles'

const firstSeason = movie.seasons.items[0]
const firstEpisode = movie.seasons.items[0].episodes.items[0]

const MovieDetailsScreen = () => {
  const [currentSeason, setCurrentSeason] = useState(firstSeason)
  const [currentEpisode, setCurrentEpisode] = useState(firstEpisode)

  const seasonNames = movie.seasons.items.map(season => season.name)
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
      {/* <VideoPlayer episode={currentEpisode} /> */}
      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => <EpisodeItem episode={item} />}
        style={{ marginBottom: 250 }}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>{movie.year}</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>

            {/* play button */}

            <Pressable
              onPress={() => {
                console.warn('Play')
              }}
              style={styles.playButton}>
              <Text style={styles.playButtonText}>
                <Entypo name="controller-play" size={16} color="black" />
                Play
              </Text>
            </Pressable>

            {/* download button */}

            <Pressable
              onPress={() => {
                console.warn('Download')
              }}
              style={styles.downloadButton}>
              <Text style={styles.downloadButtonText}>
                <AntDesign name="download" size={16} color="white" /> Download
              </Text>
            </Pressable>

            <Text style={styles.text}>{movie.plot}</Text>
            <Text style={styles.year}>Cast: {movie.cast}</Text>
            <Text style={styles.year}>Creator: {movie.creator}</Text>

            {/* Icons row */}

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                <AntDesign name="plus" size={30} color="white" />
                <Text style={{ color: 'darkgrey', marginTop: 5 }}>My List</Text>
              </View>

              <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                <Feather name="thumbs-up" size={24} color="white" />

                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Rate</Text>
              </View>

              <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                <FontAwesome name="send-o" size={24} color="white" />

                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Share</Text>
              </View>
            </View>

            <Picker
              selectedValue={currentSeason.name}
              onValueChange={(itemValue, itemIndex) => {
                setCurrentSeason(movie.seasons.items[itemIndex])
              }}
              style={{ color: 'white' }}
              itemStyle={{ backgroundColor: 'white' }}
              dropdownIconColor={'white'}>
              {seasonNames.map(seasonName => (
                <Picker.Item
                  label={seasonName}
                  value={seasonName}
                  key={seasonName}
                />
              ))}
            </Picker>
          </View>
        }
      />
    </View>
  )
}

export default MovieDetailsScreen
