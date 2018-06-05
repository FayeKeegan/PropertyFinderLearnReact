import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import RemoteSound from './RemoteSound.js';

type Props = {};
export default class PlayStory extends Component<Props> {
  constructor(props) {
    super(props);

    this.getStory = this.getStory.bind(this);
  }

  getStory() {
    return this.props.navigation.getParam('story');
  }

  render() {
    const story = this.getStory(); //this.state.story;

    return (
      <View style={styles.container}>
        <Text>{story.attributes.title}</Text>
        <RemoteSound
          url={
            'https://s3-us-west-1.amazonaws.com/dipsea-audio-files/04+Just+a+Friend.mp3'
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
