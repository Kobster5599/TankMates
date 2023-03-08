import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Icon() {
    return (
        <View style={styles.IconContainer}>
            <Fontisto name="like" size={24} color="white" />
            <Fontisto name="dislike" size={24} color="white" />
            <FontAwesome name="commenting-o" size={24} color="white"/>
            <AntDesign name="inbox" size={24} color="white" />
            <AntDesign name="flag" size={24} color="white" />
            <Entypo name="share" size={24} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    IconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    }
})