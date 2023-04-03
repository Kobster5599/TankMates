import React from 'react'
import { Pressable, View, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export const ActionButton = ({pressHandler}) => {
  return (
    <Pressable style={styles.pressableStyle} onPress={pressHandler}>
        <AntDesign name="pluscircle" size={50} color="blue" />
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    pressableStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: 'white',
        borderRadius: 25
      },
    
})