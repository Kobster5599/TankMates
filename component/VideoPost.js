import * as React from 'react';
import { View, StyleSheet, Button, Pressable } from 'react-native';
import { Video } from 'expo-av';


const VideoPost = () => {

    const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
    return (
        <View style={styles.container}>
            <Pressable onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      </Pressable>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    video: {
      width: '100%',
      aspectRatio: 16/9,
    }
  });
  

export default VideoPost