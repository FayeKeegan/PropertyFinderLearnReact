import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

// import { createStore, applyMiddleware } from 'redux';
// import { logger } from 'redux-logger';
// import { Provider } from 'react-redux';
// import Reducers from './reducers/';
// import LoginForm from './components/LoginForm';

import StoryList from './src/components/StoryList.js';
import PlayStory from './src/components/PlayStory.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

const App = StackNavigator(
  {
    Home: { screen: StoryList },
    PlayStory: { screen: PlayStory }
    // LoginForm: { screen: LoginForm }
  },
  {
    initialRouteName: 'Home'
  }
);

export default App;
// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <StoryList />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5
//   }
// });
