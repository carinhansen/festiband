import React from 'react';
import {ScrollView, StyleSheet, Text, View, ImageBackground, Button} from 'react-native';
import jsonData from '../festivals';
let jsonFestivalData = jsonData.Festivals;
import { ExpoLinksView } from '@expo/samples';
import TimetableDetailScreen from "./TimetableDetailScreen";
import FloorplanDetailScreen from "./FloorplanDetailScreen";
let festiName;
let festiDescription;
let festiImage;



export default class FestivalDetailScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      results: jsonFestivalData,
      view: null,
    };

    this.getFestivalData();
  }

  static navigationOptions = {
    title: 'FestivalDetail',
  };

  timetableView(){
    this.setState({
      view: 'timetable',
    })
  }

  floorplanView(){
    this.setState({
      view: 'floorplan',
    })
  }

  getFestivalData()  {
    const getName = Object.values(jsonFestivalData.find(festival => festival.id === this.props.id).name);
    this.festiName = getName.toString().replace(/,/g,'');

    const getDescription = Object.values(jsonFestivalData.find(festival => festival.id === this.props.id).description);
    this.festiDescription = getDescription.toString().replace(/,/g,'');

    this.festiImage = Object.values(jsonFestivalData.find(festival => festival.id === this.props.id).image).toString().replace(/,/g,'');
    console.log(this.festiImage)
  }

  render() {
    if(this.state.view === 'timetable') {
      return <TimetableDetailScreen/>
    } else if(this.state.view === 'floorplan'){
      return <FloorplanDetailScreen/>
    }
    return (
      <ScrollView style={styles.container}>

        <ImageBackground source={{uri: this.festiImage}} style={[styles.header]}>
          <Text style={styles.headerTitle}>{this.festiName}!</Text>
        </ImageBackground>

        <View style={styles.contentContainer}>
          <View style={styles.introSection}>
            <Text style={styles.title}>{this.festiName}</Text>
            <Text>{this.festiDescription}!</Text>
          </View>

          <View>
            <Text style={styles.sectionTitle}>Information</Text>

            <View style={styles.informationSection}>
              <ImageBackground source={require('../assets/images/food.png')} style={{width: 50, height: 50}}/>
              <View style={{width: '80%', justifyContent: 'center'}}>
                <Text
                  onPress={() => {
                  this.timetableView()
                  this.setState({itemId: this.props.id})
                  }}
                  style={styles.linkToDetailInfo}
                >Timetable</Text>
                <Text style={styles.subtitle}>See who is playing</Text>
              </View>
            </View>

            <View style={styles.informationSection}>
              <ImageBackground source={require('../assets/images/food.png')} style={{width: 50, height: 50}}/>
              <View style={{width: '80%', justifyContent: 'center'}}>
                <Text
                  onPress={() => {
                    this.floorplanView()
                    this.setState({itemId: this.props.id})
                  }}
                  style={styles.linkToDetailInfo}
                >Floorplan</Text>
                <Text style={styles.subtitle}>Floorplan with stand information</Text>
              </View>
            </View>
          </View>
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
    height: 200,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  linkToDetailInfo: {
    fontSize: 16,
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
