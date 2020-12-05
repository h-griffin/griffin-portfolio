// import classes from '*.module.css';

import classes from './App.css';
import React, { Component } from 'react';
// import './App.css';

import Body from './containers/Body/Body'

class App extends Component {
  render() {
    return (
        <div >
            <Body />
        </div>
    );
  }
}

export default App;
