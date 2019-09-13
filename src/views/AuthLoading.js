import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {connect} from 'react-redux';

export class AuthLoading extends React.Component {
    componentDidMount() {
        this._bootstrapAsync();
      }
    
      // Fetch the token from storage then navigate to our appropriate place
      _bootstrapAsync = async () => {
        const userToken = await this.props.user.isLogged;
        console.log(this.props.user)
    
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'Home' : 'Login');
      }
  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
  return {
      checkAuth: () => dispatch(checkAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);

