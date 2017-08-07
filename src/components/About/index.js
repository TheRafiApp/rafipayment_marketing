import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { scrollToElement } from '../../utils'
import classnames from 'classnames'

import Download from '../Home/download'
import Info from './info'

import './style.css'

const Screenshots = require('../../images/screenshots.png')

export default class Help extends Component {
  static propTypes = {
    className: PropTypes.string
  }
  static defaultProps = {
    isMounted: false
  }

  componentDidMount() {
    this._isMounted = true
    document.title = 'About | Rafi Payment'
    document.querySelectorAll('body')[0].classList.toggle('about')
    this.checkForAnchor()
  }

  componentWillUnmount() {
    this._isMounted = false
    document.querySelectorAll('body')[0].classList.toggle('about')
  }

  checkForAnchor() {
    const anchor = window.location.hash
    if (anchor) scrollToElement(anchor, 600)
    else scrollToElement('body')
  }

  render() {
    if (this._isMounted) this.checkForAnchor()

    const { className } = this.props

    return (
      <div className={classnames('About', className)}>
        <div className="content">
           <div className="container large upper">

            <div className="screenshots">
              <img src={Screenshots} alt="Rafi Payment"/>
            </div>

            <div className="copy">
              <h2>Rent management at your fingertips</h2>
              <p>Rafi Payment is the easy, secure way to pay your rent! Whether you live alone, or need to split rent with roommates, Rafi Payment makes it easy.</p>
              <p>Download Rafi Payment for iOS and Android today!</p>

              <div className="actions">
                <Link className="btn btn-primary btn-lg" to="/about/#download">Download</Link>
                {/* <Link className="btn btn-lg" to="/about/#more">Learn More</Link> */}
              </div>
            </div>
          </div>
        </div>
        <Info />
        <Download />
      </div>
    )
  }
}
