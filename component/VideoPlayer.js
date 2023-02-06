import * as React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Video } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';


export default function VideoPlayer(props) {

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [dimensions, setDimensions] = React.useState({});

  return (
      
      <Pressable onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
      <Video
      onLayout={(event) =>{  
        var {x, y, height, width } = event.nativeEvent.layout; 
        setDimensions({
          x: x,
          y: y,
          width: width,
          height: height,
          margin: height*-1
        });
  
    } }
        ref={video}
        style={styles.video}
        source={{
          uri: props.video,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
        <View style={{...styles.iconContainer, marginTop: dimensions.margin}}>
          {!status.isPlaying ? 
          (
          <View style={styles.iconBackground}>
            <AntDesign style={styles.playIcon} name="play" size={32} color="blue" /> 
            </View>
          )
          : ''}
        
        </View>
        
      </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  video: {
    width: '90%',
    aspectRatio: 16/9,
    marginBottom: 12
  },

  iconContainer:{
    width: '90%',
    aspectRatio: 16/9,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  iconBackground:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height:38,
    width: 38,
    borderRadius: 19

  },

  playIcon: {
    color: 'blue'
  }
});



