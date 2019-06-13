import React from 'react';
import {StyleSheet, Text} from 'react-native';

export class InformationSectionLinkSubTitle extends React.Component {
  render() {
    return <Text {...this.props} style={[styles.informationSectionLinkSubTitle, this.props.style]} />;
  }
}

const styles = StyleSheet.create({
  informationSectionLinkSubTitle: {
    fontSize: 16,
    color: '#808285',
    marginLeft: 10,
  },
});

export default InformationSectionLinkSubTitle;

