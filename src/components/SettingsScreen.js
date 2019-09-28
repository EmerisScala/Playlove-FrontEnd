import React from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { ListItem } from 'react-native-elements'

const list = [
  {
    title: 'Emeris Hernandez',
    icon: 'dashboard'
  },
  {
    title: 'Editar Perfíl',
    icon: 'cached'
  },
  {
    title: 'Cambiar contraseña',
    icon: 'https'
  },
  {
    title: 'Privacidad',
    icon: 'visibility'
  },
  {
    title: 'Mis llaves',
    icon: 'vpn-key'
  },
  {
    title: 'Cerrar Sesión',
    icon: 'lock'
  }
]

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
                bottomDivider
                chevron
              />
            ))
          }
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight
  }
})