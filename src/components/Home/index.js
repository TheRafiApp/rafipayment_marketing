// src/components/Home/index.js

import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';

class App extends Component {

  render() {
    const { className, ...props } = this.props;

    return (
      <div className={classnames('Home', className)}>
        <div className="container">
          <div className="copy">
            <h1>Pay your rent, <br />Anywhere.</h1>
            <a href="#about">More Info</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
