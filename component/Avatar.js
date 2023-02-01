import { View, Text} from 'react-native';
import { Image, StyleSheet } from 'react-native';

import avatar from '../assets/avatar.jpg'


const Avatars = () => {

    return (
        <View>
            <Image source={avatar} style={styles.avatarImage} />
        </View>
    )
}

export default Avatars;

const styles = StyleSheet.create({
    avatarImage: {
        width: 60,
        height: undefined,
        resizeMode: 'cover',
        aspectRatio: 1,
        borderRadius: 50

    }
})