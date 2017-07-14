// src/components/Home/about.js

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import './about.css'

class About extends Component {
  static propTypes = {
    className: PropTypes.string
  }
  static defaultProps = {}
  state = {}

  render() {
    const { className } = this.props

    return (
      <div id="about" className={classnames('textonly', className)}>
        <div className="container">
          <div className="grid">
            <div className="grid__col grid__col--1-of-3">
              <h3>Absolutely Free</h3>
              <p>Rafi Payment is completely free for tenants. No ACH fees, no user fees, no advertisements.</p>
            </div>

            <div className="grid__col grid__col--1-of-3">
              <h3>Rent Reminders</h3>
              <p>Never forget to pay rent on time! Receive email and optional text notifications to remind you that your rent is due.</p>
            </div>

            <div className="grid__col grid__col--1-of-3">
              <h3>Autopay</h3>
              <p>Pay your rent automatically every month, or pay manually as you please. Split your rent with your roommates, and receive updates as your roommates pay rent.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
