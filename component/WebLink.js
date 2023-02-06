import React, {useCallback} from 'react'
import { Linking, Pressable, StyleSheet, Text } from 'react-native'


export const WebLink = (props) => {

    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(props.link);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(props.link);
        } else {
          Alert.alert(`Don't know how to open this URL: ${props.link}`);
        }
      }, [props.link]);
        

  return (
    <Pressable onPress={() => handlePress(props.link)}>
        <Text style={styles.linkStyle}>{props.link}</Text>
    </Pressable>
       )
}

const styles = StyleSheet.create({
    linkStyle: {
        color: 'lightblue',
        textDecorationLine: 'underline',
    }
});
