import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomeScreen from './screens/homeScreen';

const RootNavigator = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={HomeScreen} />
      <Route path="/about" component={HomeScreen} />
      <Route path="/topics" component={HomeScreen} />
    </div>
  </Router>
);

export default RootNavigator;