import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  Button,
  LinearGradient,
} from 'react-native';
import { WebBrowser } from 'expo';
import jsonData from '../festivals';
let festivalData = jsonData.Festivals;
import { MonoText } from '../components/StyledText';
import FestivalDetailScreen from "./FestivalDetailScreen";
import Title from "../components/Title";

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      results: festivalData,
      viewOne: true,
      itemId: null,
    }
  }

  static navigationOptions = {
    header: null,
  };

  changeView(){
    this.setState({
      viewOne: false
    })
  }

  render() {
    if(!this.state.viewOne) return <FestivalDetailScreen changeView={ () => this.changeView() } id={this.state.itemId}/>
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Festiband</Text>
        </View>

        <View style={styles.scrollContainer}>
          <Title style={{marginBottom:0}}>Popular</Title>
          <ScrollView
            horizontal="yes"
            style={styles.scrollSection}
          >
            {this.state.results.slice(0, 10).map((item, key) => (
              <View>
                <TouchableOpacity
                  key={key}
                  style={[styles.upcomingEventContainer, {backgroundColor: 'rgb(255, 204, 204)', marginBottom: 5}]}
                  onPress={() => {
                    this.changeView()
                    this.setState({itemId: item.id})
                  }}
                >
                  <ImageBackground
                    source={{uri: item.image}}
                    imageStyle={{borderRadius: 5}}
                    style={[styles.upcomingEventCard, {width: '100%', height: '100%'}]}
                  >
                  </ImageBackground>
                </TouchableOpacity>
                <Text style={styles.upcomingEventTitle}>{item.name}</Text>
                <Text style={styles.upcomingEventText}>{item.date}</Text>
              </View>
            ))}
          </ScrollView>
          <Text style={styles.listOverview}>Click here to see a full list of festivals</Text>
        </View>


        {/*<View>*/}
        {/*{ this.state.results.slice(0, 4).map((item) => (*/}
        {/*<View*/}
        {/*style={styles.upcomingEventContainer}*/}
        {/*>*/}
        {/*<Text>{item.name}</Text>*/}
        {/*<Text>{item.shortDescription}</Text>*/}
        {/*</View>*/}
        {/*))}*/}
        {/*</View>*/}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  scrollContainer: {
    paddingLeft: 10,
  },
  scrollSection: {
    paddingBottom: 5,
  },
  logoContainer: {
    marginTop: 30,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'cocogoose',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  upcomingEventContainer: {
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
    width: 160,
    height: 220,
  },
  upcomingEventCard: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
  upcomingEventTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  upcomingEventText: {
    color: '#000',
    fontSize: 16,
  },
  listOverview: {
    fontSize: 14,
    color: '#808285',
  },
  image: {
    height: 50,
    width: 50,
  }
});
