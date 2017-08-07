// src/components/Home/index.js

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { scrollToElement } from '../../utils'

import { Link } from 'react-router-dom'
import classnames from 'classnames'

import About from './about'
import Download from './download'

import './style.css'

class Home extends Component {
  static propTypes = {
    className: PropTypes.string
  }
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
    document.title = 'Rafi Payment | Pay your rent anywhere, anytime'
    document.querySelectorAll('body')[0].classList.toggle('home')

    this.checkForAnchor()
  }

  componentWillUnmount() {
    this._isMounted = false;
    document.querySelectorAll('body')[0].classList.toggle('home')
  }

  checkForAnchor() {
    const anchor = window.location.hash
    const options = anchor
      ? [anchor, 600]
      : ['body']
    return scrollToElement(...options)
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
              <Link className="btn btn-primary btn-lg" to="/#download">Download</Link>
              <Link className="btn btn-lg" to="/about">Learn More</Link>
              {/* <Link className="btn btn-secondary btn-lg" to="/about">More Info</Link> */}
            </div>
          </div>
        </div>
        <About />
        <Download />
      </div>
    )
  }
}

export default Home;
