import React from 'react';
import {StyleSheet, View} from 'react-native';

export class ContentContainer extends React.Component {
  render() {
    return <View {...this.props} style={styles.contentContainer} />;
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default ContentContainer;

