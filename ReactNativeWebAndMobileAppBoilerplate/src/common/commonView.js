import React, { Component } from 'react';
import {  View, Dimensions } from 'react-native';

import _ from 'lodash';

let height, width;

export default class commonView extends Component {

  constructor(props, context) {
        super(props, context);

        this.state = {
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
        };

        this.getDimensions = this.getDimensions.bind(this);
    }


  componentWillMount(){
    Dimensions.addEventListener("change", this.getDimensions);
  }

  componentWillUpdate(nextProps, nextState) {
      if(!_.isEqualWith(nextState.height, this.state.height)){
        this.setState({
          height: nextState.height,
          width: nextState.width
        });
      }
    }

    getDimensions(){
      this.setState({
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
      });
    }

  render() {
    return (
      <View
        style={[{
          flexDirection: 'row',
          height: this.state.height,
          width: this.state.width,
          padding: 20,
          borderColor: 'red',
          borderWidth: 2
        }, this.props.style]}>

         {this.props.children}
      </View>
    );
  }
}
