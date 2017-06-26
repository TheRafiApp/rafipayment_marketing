// src/components/Home/index.js

import React, { Component } from 'react';
import { scrollToElement } from '../../utils';

import { Link } from 'react-router';
import classnames from 'classnames';

import About from './about';
import Download from './download';

import './style.css';

class Home extends Component {
  static propTypes = {}
  static defaultProps = {
    _isMounted: false
  }
  state = {
    error: false,
    success: false,
    loading: false
  }

  componentDidMount() {
    this._isMounted = true;
    document.title = "Rafi Payment | Pay your rent anywhere, anytime";
    document.querySelectorAll('body')[0].classList.toggle('home');

    this.checkForAnchor()
  }

  componentWillUnmount() {
    this._isMounted = false;
    document.querySelectorAll('body')[0].classList.toggle('home');
  }

  checkForAnchor() {
    const anchor = window.location.hash;
    if (anchor) scrollToElement(anchor, 600)
    else scrollToElement('body')
  }

  render() {
    if (this._isMounted) this.checkForAnchor()

    const { className } = this.props;

    return (
      <div className={classnames('Home', className)}>
        <div className="upper">
          <div className="container">
            <div className="copy">
              <h1>Pay your rent,<br />anywhere, anytime,<br />without any fees.</h1>
              <Link className="btn btn-secondary btn-lg" to="/#about">More Info</Link>
            </div>
          </div>
        </div>
        <About></About>
        <Download></Download>
      </div>
    );
  }
}

export default Home;
