import React, { Component } from 'react';
import {  View, Button, Text } from 'react-native';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Routes extends React.Component {

  render() {
    return (
      <Route path={this.props.path} component={this.props.component}   />
    );
  }
}

{/*<Button
  onPress={() => this.props.navigation.navigate('Home')}
  title="Go to Home"
/> */}
