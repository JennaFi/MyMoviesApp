import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native'
import Video from 'react-native-video'
import styles from './styles'

const VideoPlayer = () => {
  const player = useRef(null)

  return (
    <SafeAreaView>
      <Video
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        ref={player}
        controls
        resizeMode={'contain'}
        paused={false}
        onError={e => console.log(e)}
      />
    </SafeAreaView>
  )
}

export default VideoPlayer
