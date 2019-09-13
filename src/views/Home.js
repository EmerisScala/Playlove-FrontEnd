import * as React from 'react'
import { View, StyleSheet, ActivityIndicator, Image, SafeAreaView, StatusBar, 
         KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'


import { TextInput,Button,BottomNavigation, Text } from 'react-native-paper';


export default class Home extends React.Component {
    state = {
    phoneNumber: '',
    password: ''
  };

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

          <Button style={styles.button} mode="contained" onPress={() => this.sayHello() }>Decir Hola</Button>
        </View>
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }

  sayHello(){
    alert("Hola!!")
  }
}

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