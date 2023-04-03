import React from 'react';
import { View, Text} from 'react-native';
import { Image, StyleSheet } from 'react-native';

import avatar from '../assets/avatar.jpg'


export default function Avatar() {

    return (
        <View>
            <Image source={avatar} style={styles.avatarImage} />
        </View>
    )
}



const styles = StyleSheet.create({
    avatarImage: {
        width: 60,
        height: undefined,
        resizeMode: 'cover',
        aspectRatio: 1,
        borderRadius: 50

    }
})