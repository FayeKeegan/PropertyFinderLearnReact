import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import StoryList from './src/components/StoryList.js';
import PlayStory from './src/components/PlayStory.js';
import ListenModal from './src/components/ListenModal.js';

const MainStack = createStackNavigator(
  {
    Home: { screen: StoryList },
    PlayStory: { screen: PlayStory }
    // LoginForm: { screen: LoginForm }
  },
  {
    initialRouteName: 'Home'
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    ListenModal: {
      screen: ListenModal
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
