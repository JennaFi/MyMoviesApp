import React, { useRef, useState } from 'react'
import { Image, SafeAreaView, View } from 'react-native'
import Video from 'react-native-video'
import { Episode } from '../../../types'
import styles from './styles'

interface VideoPlayerProps {
  episode: Episode
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props
  const player = useRef(null)

  const [videoPaused, setVideoPaused] = useState(false) 

  // const onPressPlay = () => {
  //   setVideoPaused(!videoPaused)
  // }

  // useEffect(() => {
  //   if (!player) {
  //     return
  //   }
  //   (async () => {
  //     await player?.current?.unloadAsync()
  //     await player?.current?.loadAsync(
  //       { uri: episode.video },
  //       {},
  //       false
  //     )
  //   })()
  // }, [episode])

  return (
    <SafeAreaView>
      {videoPaused ?
        (
          <View
            style={{
            
              backgroundColor: 'rgba(0,0,0,0.2)',
              position: 'absolute',
            
              zIndex: 10,
              height: '100%',
              width: '100%',
            }}>
            <Image  source={{ uri: episode.poster}}style={{height: '100%', width: '100%'}}
            />
          </View>
        ) : 
     
        <Video
          style={styles.video}
          source={{
            uri: episode.video,
          }}
          ref={player}
          controls
          resizeMode={'contain'}
          poster={episode.poster}
          posterResizeMode={'cover'}
          paused={true}
          onError={(e: any) => console.log(e)}
          
        />
     
        
      }   
    </SafeAreaView>
  )
}

export default VideoPlayer
