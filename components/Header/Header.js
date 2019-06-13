import React from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';

export class Header extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: this.props.color, marginBottom: 10}}>
        <ImageBackground {...this.props} style={[styles.header, this.props.style]}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 230,
    flex: 1,
    justifyContent: 'flex-end',
    opacity: 0.7,
  }
});

export default Header;

