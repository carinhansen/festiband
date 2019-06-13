import React from 'react';
import {ScrollView, StyleSheet, Text, View, ImageBackground, Button, Image, Dimensions} from 'react-native';
import jsonData from '../festivals';
let jsonFestivalData = jsonData.Festivals;
import InformationSectionLinkTitle from "../components/InformationSection/InformationSectionLinkTitle";
import SectionTitle from "../components/SectionTitle";
import Title from "../components/Title";
import Header from "../components/Header/Header";
import InformationSectionImage from "../components/InformationSection/InformationSectionImage";
import InformationSectionLinkSubTitle from "../components/InformationSection/InformationSectionLinkSubTitle";
import ContentContainer from "../components/ContentContainer";
import FestivalDetailScreen from "./FestivalDetailScreen";

export default class FloorplanDetailScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      results: jsonFestivalData,
      detailFest: {},
      view: null,
    };
  }

  static navigationOptions = {
    title: 'FloorplanDetail',
  };

  componentDidMount(){
    this.getFestivalData();
  }

  getFestivalData()  {
    const test = this.state.results.filter(obj => {
      return obj.id == this.props.id;
    })

    this.setState({detailFest: test[0]});
  }

  changeView(view){
    this.setState({
      view: view,
    })
  }

  render() {
    if(this.state.view === 'festivalDetail'){
      return <FestivalDetailScreen id={this.props.id}/>
    }
    return (
      <ScrollView style={styles.container}>
        <Header source={{uri: this.state.detailFest.image}} color={this.state.detailFest.color} />

        <ContentContainer>
          <View style={styles.floorplanContainer}>
            <Title>Floorplan</Title>
              <Image source={require('../assets/images/TML_floorplan.jpg')} style={[styles.floorplanImage]} resizeMode="cover"/>
            <Text style={styles.listOverview}>Click on the floorplan to zoom in</Text>
          </View>

          <SectionTitle>Extra information</SectionTitle>

          <View style={styles.informationSection}>
            <InformationSectionImage source={require('../assets/images/food.png')}/>
            <View style={{width: '80%', justifyContent: 'center'}}>
              <InformationSectionLinkTitle
                onPress={() => {
                  this.timetableView()
                  this.setState({itemId: this.props.id})
                }}
              >Italian food</InformationSectionLinkTitle>
              <InformationSectionLinkSubTitle style={{color:'red'}}>Very busy</InformationSectionLinkSubTitle>
            </View>
          </View>

          <View style={styles.informationSection}>
            <InformationSectionImage source={require('../assets/images/toilet-01.png')}/>
            <View style={{width: '80%', justifyContent: 'center'}}>
              <InformationSectionLinkTitle
                onPress={() => {
                  this.floorplanView()
                }}
              >Toilet entrance A</InformationSectionLinkTitle>
              <InformationSectionLinkSubTitle style={{color:'#33cc33'}}>Easy access</InformationSectionLinkSubTitle>
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
  headerContainer: {
  },
  floorplanContainer: {
    marginBottom: 20,
  },
  floorplanImage: {
    flex:1 ,
    width: undefined,
    height: undefined,
    aspectRatio: 1.5,
    marginBottom: 5,
  },
  informationSection: {
    marginBottom: 10,
    textAlign: 'left',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listOverview: {
    fontSize: 14,
    color: '#808285',
  },
});
