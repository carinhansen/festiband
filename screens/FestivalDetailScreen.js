import React from 'react';
import {ScrollView, StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity} from 'react-native';
import jsonData from '../festivals';
let jsonFestivalData = jsonData.Festivals;
import TimetableDetailScreen from "./TimetableDetailScreen";
import FloorplanDetailScreen from "./FloorplanDetailScreen";
import Title from "../components/Title.js";
import InformationSectionLinkTitle from "../components/InformationSection/InformationSectionLinkTitle";
import SectionTitle from "../components/SectionTitle";
import InformationSectionImage from "../components/InformationSection/InformationSectionImage";
import InformationSectionLinkSubTitle from "../components/InformationSection/InformationSectionLinkSubTitle";
import Header from "../components/Header/Header";
import ContentContainer from "../components/ContentContainer";
import HomeScreen from "./HomeScreen";

export default class FestivalDetailScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      results: jsonFestivalData,
      view: null,
      detailFest: {},
    };
  }

  componentDidMount(){
    this.getFestivalData();
  }

  getFestivalData()  {
    const test = this.state.results.filter(obj => {
      return obj.id == this.props.id;
    })

    this.setState({detailFest: test[0]});
  }

  static navigationOptions = {
    title: 'FestivalDetail',
  };

  changeView(view){
    this.setState({
      view: view
    })
  }

  render() {
    if(this.state.view === 'timetable') {
      return <TimetableDetailScreen id={this.props.id}/>
    } else if(this.state.view === 'floorplan'){
      return <FloorplanDetailScreen id={this.props.id}/>
    } else if(this.state.view === 'home'){
      return <HomeScreen/>
    }

    return (
      <ScrollView style={styles.container}>
        <Header source={{uri: this.state.detailFest.image}} color={this.state.detailFest.color}/>

        <ContentContainer>
          <TouchableOpacity onPress={() => this.changeView('home')} style={{flexDirection: 'row', justifyContent:'space-between', opacity:0.5, marginBottom:10}}>
            <ImageBackground source={require('../assets/images/arrowBack-01.png')} style={{width: 9, height: 16, marginRight: 5}}/>
            <Text style={{textAlign:'left',flex: 1, color: '#000'}}>Go back</Text>
          </TouchableOpacity>

          <View style={styles.introSection}>
            <Title>{this.state.detailFest.name}</Title>
            <Text>{this.state.detailFest.description}!</Text>
          </View>

          <View>
            <SectionTitle>Information</SectionTitle>

            <View style={styles.informationSection}>
              <InformationSectionImage source={require('../assets/images/timetable-01.png')}/>
              <View style={{width: '80%', justifyContent: 'center'}}>
                <InformationSectionLinkTitle
                  onPress={() => {
                  this.changeView('timetable')
                  this.setState({itemId: this.props.id})
                  }}
                >Timetable</InformationSectionLinkTitle>
                <InformationSectionLinkSubTitle>See who is playing</InformationSectionLinkSubTitle>
              </View>
            </View>

            <View style={styles.informationSection}>
              <InformationSectionImage source={require('../assets/images/floorplan-01.png')}/>
              <View style={{width: '80%', justifyContent: 'center'}}>
                <InformationSectionLinkTitle
                  onPress={() => {
                    this.changeView('floorplan')
                  }}
                >Floorplan</InformationSectionLinkTitle>
                <InformationSectionLinkSubTitle>Floorplan with stand information</InformationSectionLinkSubTitle>
              </View>
            </View>

            <View style={styles.informationSection}>
              <InformationSectionImage source={require('../assets/images/food.png')}/>
              <View style={{width: '80%', justifyContent: 'center'}}>
                <InformationSectionLinkTitle
                  onPress={() => {
                    this.changeView('stands')
                  }}
                >Stands</InformationSectionLinkTitle>
                <InformationSectionLinkSubTitle>See which stands are available</InformationSectionLinkSubTitle>
              </View>
            </View>
          </View>
        </ContentContainer>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  headerContainer: {
    backgroundColor: '#ff0066',
    marginBottom: 20,
  },
  header: {
    height: 200,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  }
});
