import React, { Component } from 'react';
import {  View } from 'react-native';

import Drawer from 'react-toolbox/lib/drawer';
import { List, ListItem } from 'react-toolbox/lib/list';
import AppBar from 'react-toolbox/lib/app_bar';

import * as FontAwesome from 'react-icons/lib/fa';

import { Redirect } from "react-router-dom";


export default class WebDrawer extends Component {
  state = {
    active: false
  };

  handleToggle = () => {
    this.setState({active: !this.state.active});
  };

  render () {
    return (
      <View>
        <AppBar
          title='React Toolbox'
          leftIcon={<FontAwesome.FaBars />}
          onLeftIconClick={this.handleToggle} />
        <Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
          <List selectable ripple>
            <ListItem
              avatar={<FontAwesome.FaHome />}
              caption='Home'
              to={"/home"}
            />
            <ListItem
              avatar={<FontAwesome.FaLocationArrow />}
              caption='Location'
              to={"/about"}
            />
            <ListItem
              avatar={<FontAwesome.FaComments />}
              caption='Comments'
              to={"/topics"}
            />
          </List>
        </Drawer>
      </View>
    );
  }
}
