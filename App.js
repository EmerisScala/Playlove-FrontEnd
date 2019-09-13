import React from 'react'
import{Provider} from 'react-redux'
import configureStore from './configureStore'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Containers
import LoginContainer from './src/views/Login'
import HomeContainer from './src/views/Home'
import AuthLoading from './src/views/AuthLoading'
import RegisterContainer from './src/views/Register'

let store = configureStore()

let RootStack = createStackNavigator({
  Auth: AuthLoading,
  Home: HomeContainer,
  Login: LoginContainer,
  Register: RegisterContainer
},{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false
  }
})

let Navigation = createAppContainer(RootStack);

// Render the app container component with the provider around it
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}