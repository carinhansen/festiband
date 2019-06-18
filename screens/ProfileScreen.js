import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import jsonData from '../users';
import Title from "../components/Title";
const jsonUserData = jsonData.Users;

export default class ProfileScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: jsonUserData,
      detailUser: {},
    };
  }

  static navigationOptions = {
    title: 'Profile',
  };

  componentDidMount(){
    this.getUserData();
  }

  getUserData()  {
    const user = this.state.results.filter(obj => {
      return obj.id == this.props.id;
    })

    this.setState({detailUser: user[0]});
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <Title>{this.state.detailUser.name}</Title>
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
