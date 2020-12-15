// import classes from '*.module.css';

import React, { Component } from 'react';
import AppStyle from './App.css';

import Portfolio from './containers/Portfolio/Portfolio'

class App extends Component {
  render() {
    return (
        <div className={AppStyle}>
            <Portfolio />
        </div>
    );
  }
}

export default App;
