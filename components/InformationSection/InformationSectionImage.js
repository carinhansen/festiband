import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

export class InformationSectionImage extends React.Component {
  render() {
    return <ImageBackground {...this.props} style={styles.informationSectionImage} />;
  }
}

const styles = StyleSheet.create({
  informationSectionImage: {
    width: 60,
    height: 60,
  },
});

export default InformationSectionImage;

