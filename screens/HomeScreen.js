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
} from 'react-native';
import { WebBrowser } from 'expo';
import jsonData from '../festivals';
let festivalData = jsonData.Festivals;
import { MonoText } from '../components/StyledText';
import FestivalDetailScreen from "./FestivalDetailScreen";

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

        <View style={styles.scrollContainer} >
          <Text style={styles.subtitle}>Upcoming festivals</Text>
          <ScrollView
            horizontal="yes"
            style={styles.scrollSection}
          >
            { this.state.results.slice(0, 10).map((item) => (
              <TouchableOpacity
                style={[styles.upcomingEventContainer, {backgroundColor: 'rgb(255, 204, 204)'}]}
                onPress={() => {
                  this.changeView()
                  this.setState({itemId: item.id})
                }}
              >
                <ImageBackground source={{uri:item.image}} style={[styles.upcomingEventSection, {width: '100%', height: '100%'}]}>
                  <Text style={styles.upcomingEventTitle}>{item.name}</Text>
                  <Text style={styles.upcomingEventText}>{item.date}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text style={styles.listOverview}>Click here to see a full list of festivals -></Text>
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

  // _maybeRenderDevelopmentModeWarning() {
  //   if (__DEV__) {
  //     const learnMoreButton = (
  //       <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
  //         Learn more
  //       </Text>
  //     );
  //
  //     return (
  //       <Text style={styles.developmentModeText}>
  //         Development mode is enabled, your app will be slower but you can use useful development
  //         tools. {learnMoreButton}
  //       </Text>
  //     );
  //   } else {
  //     return (
  //       <Text style={styles.developmentModeText}>
  //         You are not in development mode, your app will run at full speed.
  //       </Text>
  //     );
  //   }
  // }

  // _handleLearnMorePress = () => {
  //   WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  // };
  //
  // _handleHelpPress = () => {
  //   WebBrowser.openBrowserAsync(
  //     'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
  //   );
  // };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  scrollContainer: {
    height: 250,
    paddingLeft: 10,
  },
  scrollSection: {
    paddingBottom: 10,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  logoContainer: {
    marginTop: 30,
    marginBottom: 20,
    paddingLeft: 10,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  upcomingEventContainer: {
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
    width: 180,
  },
  upcomingEventSection: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
  upcomingEventTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  upcomingEventText: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  listOverview: {
    fontSize: 14,
    color: 'lightgrey',
  },
  image: {
    height: 50,
    width: 50,
  }
});
