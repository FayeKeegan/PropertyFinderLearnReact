import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import Sound from 'react-native-sound';

export default class RemoteSound extends Component {
  constructor(props) {
    super(props);

    this.setTrack = this.setTrack.bind(this);

    this.state = {
      track: null
    };
  }

  setTrack(track) {
    this.setState({
      track: track
    });
  }

  componentDidMount() {
    const storyUrl = this.props.url;

    const setTrack = this.setTrack;
    const track = new Sound(storyUrl, null, e => {
      if (e) {
        console.log('error loading track:', e);
      } else {
        setTrack(track);
      }
    });
  }

  render() {
    const track = this.state.track;
    if (track) {
      return (
        <View>
          <Text>{track.getDuration()}</Text>
          <Button title="play me" onPress={() => track.play()} />
          <Button title="pause me" onPress={() => track.pause()} />
        </View>
      );
    }
    return <Text>Loading...</Text>;
  }
}
