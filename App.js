import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { f, auth, database, storage } from './config/config.js';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import feed from './app/screens/feed.js';
import profile from './app/screens/profile.js';
import upload from './app/screens/upload.js';
import userProfile from './app/screens/userProfile.js';
import comments from './app/screens/comments.js';


const TabStack = createBottomTabNavigator(
  {
    Feed: { screen: feed },
    Upload: { screen: upload },
    Profile: { screen: profile }
  }
)

const MainStack = createStackNavigator(
  {
    Home: { screen: TabStack },
    User: { screen: userProfile },
    Comments: { screen: comments },
  },
  {
    initalRouteName: 'Home',
    mode: 'modal',
    headerMode: 'none'
  }
)

export default class App extends React.Component {

  login = async() => {
    //force user to login
    try{
      let user = await auth.signInWithEmailAndPassword('test@user.com', 'password');
    }catch(error){
      console.log(error);
    }
  }

  constructor(props){
    super(props);
    this.login();
  }
  render() {
    return (
      <MainStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
