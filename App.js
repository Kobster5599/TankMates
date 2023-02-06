import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import VideoPost from './component/VideoPost';
import Avatars from './component/Avatar';
import VideoPlayer from './component/VideoPlayer';
import { WebLink } from './component/WebLink';

export default function App() {

  const feedData = [
    { id: 1, text: 'Post 1', videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', webLink: 'https://google.com', user: 'Kobe Puskas', avatar: '' },
    { id: 2, text: 'Post 2', videoLink: '' },
    { id: 3, text: 'Post 3', videoLink: '' },
    { id: 4, text: 'Post 4', videoLink: '' },
    { id: 5, text: 'Post 5', videoLink: '' },
    { id: 6, text: 'Post 6', videoLink: '' },
    { id: 7, text: 'Post 7', videoLink: '' },
    { id: 8, text: 'Post 8', videoLink: '' },

  ];

    const renderItem = ({item, index}) => {
      return (
        <View style={styles.postView}>
          <View style={styles.avatarCol}>
          <Avatars/>
          </View>
        <View style={styles.otherCol}>
           <Text style={styles.txtBold}>{item.user}</Text>
          <Text style={styles.txt}>{item.text}</Text>
          { item.webLink !== '' ? <WebLink link={item.webLink} /> : ''}
          { item.videoLink !== '' ? <VideoPlayer video={item.videoLink} /> : '' }
        </View>
        </View>
      );
    }


  return (
    <SafeAreaView style={styles.container}>

      <FlatList 
        style={styles.feedList}
        data={feedData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 12,
    alignItems: 'center',
    
    
  },

  feedList: {
    width:'100%',
    paddingHorizontal: 12
  },

  postView: {
    marginHorizontal: 8,
    marginBottom: 8,
    padding: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderTopColor: 'grey',
    borderTopWidth: 1,
    borderStyle: 'solid'
    
  },

  avatarCol: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '15%',
    backgroundColor: '#000',
    marginHorizontal: 12
  },

  otherCol: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#000'
  },

  txt: {
    color: 'white'
  },

  txtBold: {
    color: 'white',
    fontWeight: 'bold'
  }
});
