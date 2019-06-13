import React from 'react';
import {ScrollView, StyleSheet, Text, View, ImageBackground, Button, Image} from 'react-native';
import jsonData from '../festivals';
let jsonFestivalData = jsonData.Festivals;
import HeaderTitle from "../components/HeaderTitle";
import Header from "../components/Header/Header";
import ContentContainer from "../components/ContentContainer";
import Title from "../components/Title";

export default class TimetableDetailScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      results: jsonFestivalData,
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
    title: 'TimetableDetail',
  };


  render() {
    return (
      <ScrollView style={styles.container}>
        <Header source={{uri: this.state.detailFest.image}}/>

        <ContentContainer>
          <Title>Timetable</Title>
          <Title>{this.state.detailFest.name}!</Title>
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
});
