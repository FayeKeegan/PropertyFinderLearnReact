'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.props.getData(); //call our action
  }

  render() {
    if (this.props.loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true} />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, backgroundColor: '#F5F5F5', paddingTop: 20 }}>
          <FlatList
            ref="listRef"
            data={this.props.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
          />
        </View>
      );
    }
  }

  renderItem({ item, index }) {
    return (
      <View style={styles.row}>
        <Text style={styles.title}>
          {parseInt(index) + 1}
          {'. '}
          {item.attributes.title}
        </Text>
        <Text style={styles.description}>{item.attributes.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  row: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10
  },

  title: {
    fontSize: 15,
    fontWeight: '600'
  },

  description: {
    marginTop: 5,
    fontSize: 14
  }
});
