import React from 'react';
import {StyleSheet, Text} from 'react-native';

export class HeaderTitle extends React.Component {
  render() {
    return <Text {...this.props} style={styles.headerTitle} />;
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HeaderTitle;

