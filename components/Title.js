import React from 'react';
import {StyleSheet, Text} from 'react-native';

export class Title extends React.Component {
  render() {
    return <Text {...this.props} style={[styles.title, this.props.style]} />;
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'cocogoose',
  },
});

export default Title;

