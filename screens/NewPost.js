import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Modal, TextInput, Text, Button, Pressable, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';

export const NewPost = () => {

    const { post, setPost } = useState({});
    const [ postText, setPostText ] = useState('');
    const [ videoLink, setVideoLink ] = useState('');
    const [ picLink, setPicLink ] = useState('');
    const [ webLink, setWebLink ] = useState('');
    
    const [modalVisible, setModalVisible] = useState(false)


    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: false,
          // aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setPicLink(result.assets[0].uri);
        }
      };  
    
      const pickVideo = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Videos,
          allowsEditing: false,
          // aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setVideoLink(result.assets[0].uri);
        }
      };  

    return (
    <View style ={styles.container}>
        <Text style={styles.title}>New Post</Text>
        <View style={styles.post}>
            <Text style={styles.text}>{postText}</Text>
            {picLink && <Image source={{ uri: picLink }} style={{ alignSelf: 'center', width: 480, height: 320, resizeMode: 'contain'}} />}
        </View>
        <View style={styles.input}>
        <TextInput 
            ref={inputRef}
            style={styles.textBox}
            editable 
            multiline 
            numbrOfLines={5} 
            maxLength={248} 
            onChangeText={setPostText} 
            value={postText}
            />
             <View style={styles.iconRow}>
                <View style={styles.icons}>
                    <AntDesign name="link" size={24} color="white" />
                    <AntDesign name="picture" size={24} color="white" />
                    <AntDesign name="videocamera" size={24} color="white" />
                </View>
                <Button style={styles.button} title='Submit'></Button>

                </View>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
             <View style={styles.modal}>
                <Text style={styles.modalText}>New Weblink</Text>
                <TextInput style={styles.linkInput} editable onChangeText={setWebLink} value={webLink} />
                <Pressable onPress={() => setModalVisible(false)} style={styles.modalButton}>
                    <Text style={styles.modalButtonText}>Close</Text>
                </Pressable>

            </View>
        
        </Modal>
        </View>

        
    </View>
    

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#000',
        marginTop: 30,
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    post: {
        marginHorizontal: 10,
        width: '100%',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        flex: 3
    },
    input: {
        color: 'white',
        marginHorizontal: 10,
        width: '100%',
        flex: 1
    },

    text: {
        color: 'white',
        fontSize: 18
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: '800',
        alignSelf: 'flex-start'
    },
    textBox: {
        color: 'white',
        backgroundColor: '#333',
        fontSize: 14,
        textAlignVertical: 'top',
        padding: 10
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 36
    },
    icons: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-evenly'
    },
    button: {
        height: 24,
        backgroundColor: '#333'
    }, 

    modal: {
        backgroundColor: 'white',
        height: '50%',
        marginTop: '100%',
        padding: 8,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    modalText: {
        color: 'black',
        fontSize: 18

    },
    modalButton: {
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 5,
    },
    modalButtonText: {
        color: 'white'
    }


})