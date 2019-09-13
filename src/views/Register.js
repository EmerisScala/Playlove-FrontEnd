import * as React from 'react'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { Text } from 'react-native-elements'
import * as EmailValidator from 'email-validator'
import { KeyboardAvoidingView } from 'react-native'

export default class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            phoneNumber: '',
            name: '',
            nickname: '',
            firstLastName: '',
            email: '',
            password: '',
            passwordRepeat: ''
        }
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                keyboardVerticalOffset={0}
                behavior="padding"
                enabled>
                <ScrollView>
                    <View>
                        <Text h2 style={styles.title}>Unirse</Text>
                        <TextInput
                            mode='outlined'
                            label='Telefono'
                            autoCorrect={false}
                            value={this.state.phoneNumber}
                            style={styles.textInput}
                            onChangeText={phoneNumber => this.setState({ phoneNumber })}
                        />
                        <TextInput
                            mode='outlined'
                            label='Nickname'
                            autoCorrect={false}
                            value={this.state.nickname}
                            style={styles.textInput}
                            onChangeText={nickname => this.setState({ nickname })}
                        />
                        <TextInput
                            mode='outlined'
                            label='Nombre'
                            autoCorrect={false}
                            maxLength={10}
                            value={this.state.name}
                            style={styles.textInput}
                            onChangeText={name => this.setState({ name })}
                        />
                        <TextInput
                            mode='outlined'
                            label='Apellido'
                            autoCorrect={false}
                            value={this.state.firstLastName}
                            style={styles.textInput}
                            onChangeText={firstLastName => this.setState({ firstLastName })}
                        />
                        <TextInput
                            mode='outlined'
                            label='email'
                            value={this.state.email}
                            autoCorrect={false}
                            style={styles.textInput}
                            onChangeText={email => this.setState({ email })}
                        />
                        <TextInput
                            mode='outlined'
                            label='Contraseña'
                            secureTextEntry={true}
                            value={this.state.password}
                            autoCorrect={false}
                            style={styles.textInput}
                            onChangeText={password => this.setState({ password })}
                        />
                        <TextInput
                            mode='outlined'
                            label='Repetir Contraseña'
                            secureTextEntry={true}
                            value={this.state.passwordRepeat}
                            autoCorrect={false}
                            style={styles.textInput}
                            onChangeText={passwordRepeat => this.setState({ passwordRepeat })}
                        />
                        <Button style={styles.button} mode="contained" onPress={() => this.registerUser()}>Continuar</Button>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }

    registerUser() {
        if (this.emptyFields()) {
            alert('Faltan datos por llenar');
        } else {
            if (this.validateEmail(this.state.email)) {
                if (this.validatePassword()) {
                    this.props.navigation.navigate('RegisterValidation', {
                        phoneNumber: this.state.phoneNumber,
                        name: this.state.name,
                        nickname: this.state.nickname,
                        firstLastName: this.state.firstLastName,
                        email: this.state.email
                    })
                } else {
                    alert("Las contraseñas no coinciden")
                }
            } else {
                alert("El correo ingresado no es válido")
            }
        }
    }

    emptyFields = () => {
        return (this.state.phoneNumber == '' ||
            this.state.nickname == '' ||
            this.state.name == '' ||
            this.state.firstLastName == '' ||
            this.state.email == '' ||
            this.state.password == '' ||
            this.state.passwordRepeat == '')
            ? true : false
    }

    validateEmail = email => {
        return EmailValidator.validate(email)
    }

    validatePassword = () => {
        return (this.state.password == this.state.passwordRepeat)? true : false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 15,
        margin: 20
    },
    paragraph: {
        margin: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        height: 128,
        width: 128,
    },
    button: {
        marginTop: 15,
        height: 40,
        backgroundColor: '#EC407A'
    },
    textInput: {
        marginTop: 10
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#EC407A',
        textAlign: 'center'
    }
})
