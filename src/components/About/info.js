import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

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
              <h3>Simple Dashboard</h3>
              <p>Our intuitive billing interface makes managing payments fast and effortless.</p>
            </div>

            <div className="grid__col grid__col--1-of-3">
              <h3>Split Rent</h3>
              <p>If you have roommates, splitting your rent is easy, and everyone will be notified when the bill is paid in full.</p>
            </div>

            <div className="grid__col grid__col--1-of-3">
              <h3>Flexible Platform</h3>
              <p>Link multiple bank accounts, pay when you are ready, or pay rent automatically each month, {"it's"} up to you.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
