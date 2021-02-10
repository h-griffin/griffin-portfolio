// import classes from '*.module.css';

import React, { Component } from 'react';
import AppStyle from './App.css';

import Portfolio from './containers/Portfolio/Portfolio'
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className={AppStyle}>
                <Portfolio />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
