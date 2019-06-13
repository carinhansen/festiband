import React from 'react';
import {StyleSheet, Text} from 'react-native';

export class InformationSectionLinkTitle extends React.Component {
  render() {
    return <Text {...this.props} style={styles.informationSectionLinkTitle} />;
  }
}

const styles = StyleSheet.create({
  informationSectionLinkTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginLeft: 10,
  },
});

export default InformationSectionLinkTitle;

