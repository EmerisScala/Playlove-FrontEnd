import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Image, ScrollView, SafeAreaView } from 'react-native';
import { Constants } from 'expo';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
]

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Card title="Emeris Hernandez">
            <Image
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>
              The idea with React Native Elements is more about component structure than actual design.
                    </Text>
            <Button
              icon={<Icon name='comment' color='#ffffff' />}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title='  Comentar ahora' />
          </Card>
          <Card title="Emeris Hernandez">
            <Image
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>
              The idea with React Native Elements is more about component structure than actual design.
                    </Text>
            <Button
              icon={<Icon name='comment' color='#ffffff' />}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title='  Comentar ahora' />
          </Card>
          <Card title="Emeris Hernandez">
            <Image
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>
              The idea with React Native Elements is more about component structure than actual design.
                    </Text>
            <Button
              icon={<Icon name='comment' color='#ffffff' />}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title='  Comentar ahora' />
          </Card>
          <Card title="Emeris Hernandez">
            <Image
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>
              The idea with React Native Elements is more about component structure than actual design.
                    </Text>
            <Button
              icon={<Icon name='comment' color='#ffffff' />}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title='  Comentar ahora' />
          </Card>
          <Card title="Emeris Hernandez">
            <Image
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>
              The idea with React Native Elements is more about component structure than actual design.
                    </Text>
            <Button
              icon={<Icon name='comment' color='#ffffff' />}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title='  Comentar ahora' />
          </Card>
          <Card title="Emeris Hernandez">
            <Image
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>
              The idea with React Native Elements is more about component structure than actual design.
                    </Text>
            <Button
              icon={<Icon name='comment' color='#ffffff' />}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#9C27B0' }}
              title='  Comentar ahora' />
          </Card>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight
  },
  image: {
    height: 280
  },
  text: {
    marginBottom: 10,
    marginTop: 10
  }
})