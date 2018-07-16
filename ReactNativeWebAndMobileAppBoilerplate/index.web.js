import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View} from 'react-native';

import _ from 'lodash';
import createHistory from "history/createBrowserHistory";

import CommonView from './src/common/commonView';
import RootNavigator from './src/rootNavigator';

const history = createHistory();

class ReactNativeWebAndMobileAppBoilerplate extends Component {

  constructor(props, context) {
        super(props, context);

        this.state = {
        };

    }


  componentWillMount(){
  }


  render() {
    return (
      <RootNavigator />
    );
  }
}

AppRegistry.registerComponent('ReactNativeWebAndMobileAppBoilerplate', () => ReactNativeWebAndMobileAppBoilerplate);
AppRegistry.runApplication('ReactNativeWebAndMobileAppBoilerplate', { rootTag: document.getElementById('react-app') });



// <CommonView>
// <View style={{backgroundColor: 'blue', flex: 1}} />
// <View style={{backgroundColor: 'red', flex: 1}} />
//   <Text>Hello World!</Text>
// </CommonView>
