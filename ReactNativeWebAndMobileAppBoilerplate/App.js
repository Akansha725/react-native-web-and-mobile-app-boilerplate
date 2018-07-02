/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  componentWillMount(){
    height = Dimensions.get('window').height;
    width = Dimensions.get('window').width;

    console.log(height+ " "+width);
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: height,
          width: width,
          padding: 20,
          borderColor: 'red',
          borderWidth: 2
        }}>
        <View style={{backgroundColor: 'blue', flex: 1}} />
        <View style={{backgroundColor: 'red', flex: 1}} />
        <Text>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
