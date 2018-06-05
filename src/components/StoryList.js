import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

type Props = {};

export default class StoryList extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      stories: []
    };
  }

  componentDidMount(props) {
    // this.props.getData();
    fetch('https://dipsea-proto.herokuapp.com/api/v1/tracks')
      .then(response => response.json())
      .then(json =>
        this.setState({
          stories: json.data
        })
      )
      .catch(error =>
        this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
        })
      );
  }

  render() {
    const navigate = this.props.navigation.navigate;
    // console.log(this.props.navigation);

    if (this.props.loading) {
      <Text>Loading....</Text>;
    } else {
      return (
        <View style={styles.container}>
          {this.state.stories.map(story => (
            <Button
              onPress={() => navigate('PlayStory', { story: story })}
              style={styles.welcome}
              title={story.attributes.title}
            />
          ))}
        </View>
      );
    }
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
