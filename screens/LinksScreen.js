import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import jsonData from '../users';
import Title from "../components/Title";
import ProfileScreen from "./ProfileScreen";
const jsonUserData = jsonData.Users;

export default class LinksScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: jsonUserData,
      itemId: null,
      view: null,
    };
  }

  static navigationOptions = {
    title: 'Links',
  };

  changeView(view){
    this.setState({
      view: view,
    })
  }


  render() {
    if(this.state.view === 'Profile') return <ProfileScreen id={this.state.itemId}/>
    return (
      <ScrollView style={styles.container}>
        {this.state.results.map((item, key) => (
          <View>
            <TouchableOpacity
              key={key}
              style={[styles.upcomingEventContainer, {backgroundColor: 'rgb(255, 204, 204)', marginBottom: 5}]}
              onPress={() => {
                this.changeView('Profile')
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
