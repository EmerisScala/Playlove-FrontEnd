import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import {Icon} from 'react-native-elements'
import {connect} from 'react-redux'
import {loadFonts} from '../actions'

import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import ForumScreen from './ForumScreen'
import CatalogScreen from './CatalogScreen'

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MaterialIcons from './../..//node_modules/@expo/vector-icons/src/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf';

  const TabNavigator = createMaterialBottomTabNavigator({
    Forum: {
      screen: ForumScreen,
      navigationOptions: {
         barStyle: {backgroundColor: '#EC407A'},
         tabBarIcon: () => (
          <Icon
          name='forum'
          color='#fff' />
        )
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
          barStyle: { backgroundColor: '#EC407A' },
          tabBarIcon: () => (
            <Icon
            name='home'
            color='#fff' />
          )
      }
  },
    Catalog: {
      screen: CatalogScreen,
      navigationOptions: {
        barStyle: {backgroundColor: '#EC407A'},
        tabBarIcon: () => (
          <Icon
          name='favorite'
          color='#fff' />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions:{
        barStyle: {backgroundColor: '#EC407A'},
        tabBarIcon: () => (
          <Icon
          name='settings'
          color='#fff' />
        )
      }
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#fff' },
    labeled: false
  })
  
  let Navigation2= createAppContainer(TabNavigator)

  class BottomNavigationComponent extends React.Component{
    async componentWillMount() {
      try {
        await Font.loadAsync({
          MaterialIcons
        });
  
        this.props.loadFonts()
      } catch (error) {
        console.log('error loading icon fonts', error);
      }
    }

    render(){
      if (!this.props.tab.fontLoaded) {

        return <AppLoading />;
  
      }else{
        return (
          <Navigation2 />
        )
      }
    }
  }

  const mapStateToProps = state => {
    return {
        tab: state.tab
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadFonts: () => {
            return dispatch(loadFonts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigationComponent)
