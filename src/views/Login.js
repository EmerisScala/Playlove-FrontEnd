import * as React from 'react'
import { View, StyleSheet, ActivityIndicator, Image, SafeAreaView, StatusBar, 
         KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { TextInput,Button,BottomNavigation, Text } from 'react-native-paper'
import {fetchAuthUser} from '../actions'
import { connect } from 'react-redux'


export class Login extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      phoneNumber : '',
      password : ''
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
       <View style={styles.container}>
        <View style={styles.containerTop}>
          <Image style={styles.logo} source={ {uri: 'https://playlovecommunity.000webhostapp.com/img/Playlove.png' }} />
        </View>
        <View style={styles.containerBottom}>
          <TextInput
            mode='outlined'
            label='Phone Number'
            autoCorrect={false}
            value={this.state.phoneNumber}
            onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
          />
          {console.log("Estate: ")}
          {console.log(this.props.user)}
          <TextInput
            mode='outlined'
            label='Contraseña'
            secureTextEntry={true}
            value={this.state.password}
            autoCorrect={false}
            onChangeText={(password) => this.setState({ password })}
          />
          <Button style={styles.button} mode="contained" onPress={() => this.handleSubmit() }>Iniciar Sesión</Button>

          <Button style={styles.button} mode="contained" onPress={() => this.handleRegister() }>Registrar</Button>
        </View>
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  handleSubmit = async () => {
    userData = this.state
    await this.props.authUser(userData)
    if(this.props.user.data.result == true){
      this.props.navigation.navigate('Home');
    }else{
      alert("usuario desconocido")
    }
  }

  handleRegister = () => {
    
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authUser: (userData) => {
      return dispatch(fetchAuthUser(userData))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#ffff',
      paddingLeft: 8,
      paddingRight: 8,
      paddingBottom: 5
    },
    containerTop: {
      flex: 1,
      top: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    containerBottom : {
      position: 'absolute',
      backgroundColor: '#ffff',
      left: 0,
      right: 0,
      bottom: 50,
      height: 250
    },
    logo: {
      width:200,
      bottom: 50,
      height: 150
    },
    button:{
      marginTop: 15,
      height: 40,
      backgroundColor: '#EC407A'
    }
  });