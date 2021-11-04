import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native'
import Video from 'react-native-video'
import { Episode } from '../../../types'
import styles from './styles'

interface VideoPlayerProps {
  episode: Episode
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props
  const player = useRef(null)

  return (
    <SafeAreaView>
      <Video
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        ref={player}
        controls
        resizeMode={'contain'}
        poster={episode.poster}
        paused={false}
        onError={(e: any) => console.log(e)}
      />
    </SafeAreaView>
  )
}

export default VideoPlayer
