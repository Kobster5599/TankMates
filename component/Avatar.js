import { View, Text} from 'react-native';
import { Image, StyleSheet } from 'react-native';

import avatar from '../assets/avatar.jpg'


const Avatar = () => {

    return (
        <View styles= {styles.avatarImage}>
            <Image source={avatar} />
        </View>
    )
}

export default Avatar;

const styles = StyleSheet.create({
    avatarImage: {
        width: 30,
    }
})