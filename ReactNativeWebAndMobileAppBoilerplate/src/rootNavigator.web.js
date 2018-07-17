import React from 'react';
import {  View, Button, Text } from 'react-native';
import { BrowserRouter, Route, Link } from "react-router-dom";

import HomeScreen from './screens/homeScreen';
import Drawer from './Drawer';
import Routes from './Routes';

const RootNavigator = () => (
  <BrowserRouter>
    <View>
      <Routes path="/" component={Drawer} />
      <Routes path="/home" component={HomeScreen} />
    </View>
  </BrowserRouter>
);

export default RootNavigator;
