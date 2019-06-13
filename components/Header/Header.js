import React from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';

export class Header extends React.Component {
  render() {
    return (
        <ImageBackground {...this.props} style={styles.header} />
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 200,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10,
    opacity: 0.7,
  }
});

export default Header;

