import * as React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import { Icon, Button} from 'react-native-elements'

export default class ImagePickerComponent extends React.Component {
    state = {
        image: null,
    }

    render() {
        let { image } = this.state;

        return (
            <View style={styles.container}>
                <Button
                    icon={<Icon name='image' color='#EC407A' />}
                    buttonStyle={styles.button}
                    onPress={this.pickImage}
                />
                {image &&
                    <Image source={{ uri: image }} style={styles.image} resizeMode='cover' />}
            </View>
        );
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    image: {
        height: 280,
        width: 350
    },
    button:{
        backgroundColor: '#fff', 
        borderRadius: 0, 
        marginLeft: 0, 
        marginRight: 0, 
        marginBottom: 0
    }
})