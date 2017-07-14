// src/components/Home/download.js

import React, { Component } from 'react';
import classnames from 'classnames';

import PropTypes from 'prop-types'
import './download.css';

import Android from './android.js';
import Ios from './ios.js';

class Download extends Component {
  static propTypes = {
    className: PropTypes.string
  }
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
                  <a href="https://play.google.com/store/apps/details?id=com.rafi.payment&hl=en" target="_blank" rel="noopener noreferrer">
                    <Android />
                  </a>
                </div>
                <div className="grid__col grid__col--1-of-2">
                  <a href="https://itunes.apple.com/us/app/rafi-payment/id1248376543" target="_blank" rel="noopener noreferrer">
                    <Ios />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Download;
