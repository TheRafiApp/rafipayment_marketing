// src/components/Home/download.js

import React, { Component } from 'react';

// import ReactDOM from 'react-dom';
import classnames from 'classnames';

import './download.css';

import Android from './android.js';
import Ios from './ios.js';

class Download extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className } = this.props;

    return (
      <div id="download" className={classnames(className)}>
        <div className="container">
          <div className="grid">
            <div className="grid__col grid__col--1-of-2">
              <div className="grid">
                <div className="grid__col grid__col--1-of-2">
                  <a href="#">
                    <Android />
                  </a>
                </div>
                <div className="grid__col grid__col--1-of-2">
                  <a href="#">
                    <Ios />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Download;
