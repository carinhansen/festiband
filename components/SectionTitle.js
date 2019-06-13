import React from 'react';
import {StyleSheet, Text} from 'react-native';

export class SectionTitle extends React.Component {
  render() {
    return <Text {...this.props} style={styles.sectionTitle} />;
  }
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SectionTitle;

