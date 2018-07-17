import React, { Component } from 'react';
import {  View, Button, Text } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../icons/homepage.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View>
       <Text> HOme </Text>
      </View>
    );
  }
}


{/*<Button
  onPress={() => this.props.navigation.navigate('Home')}
  title="Go to Home"
/> */}
