import React from 'react'
import { Text, View, StyleSheet, StatusBar, TextInput } from 'react-native'
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'
import ImagePicker from './ImagePickerComponent'


export default class RegisterPublicationComponent extends React.Component {
    render() {
        return (
            <View>
                <Card title="Emeris Hernandez">
                    <TextInput
                        multiline={true}
                        placeholder='Publica algo...' 
                        maxLength={200}
                        />
                    <ImagePicker />
                    <Divider />
                    <Button
                        icon={<Icon name='comment' color='#ffffff' />}
                        buttonStyle={styles.button}
                        title='  Publicar'
                    />
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#EC407A', 
        borderRadius: 0, 
        marginLeft: 0, 
        marginRight: 0, 
        marginBottom: 0
    }
})