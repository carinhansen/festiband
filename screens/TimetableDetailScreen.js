import React from 'react';
import {ScrollView, StyleSheet, Text, View, ImageBackground, Button} from 'react-native';
import jsonData from '../festivals';
let jsonFestivalData = jsonData.Festivals;
import { ExpoLinksView } from '@expo/samples';

export default class TimetableDetailScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      results: jsonFestivalData,
    };
  }

  static navigationOptions = {
    title: 'TimetableDetail',
  };


  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.detailTitle}>Timetable</Text>
          <Text style={styles.detailTitle}>{this.festiName}!</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    marginBottom: 20,
    padding: 20,
  },
  header: {
    height: 150,
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailTitle: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  linkToDetailInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  subTitle: {
    fontSize: 16,
    color: 'lightgrey',
  },
  introSection: {
    marginBottom: 20,
  },
  informationSection: {
    marginBottom: 10,
    textAlign: 'left',
  },
});
