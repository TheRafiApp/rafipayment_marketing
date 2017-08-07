import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

// layout
import Logo from './logo'
import RequestForm from './request_form'

// css
import './main-layout.css'

class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }
  render() {
    return (
      <div className="app">
        <header>
          <div className="container">
            <NavLink className="logo" to="/" activeClassName="active">
              <Logo></Logo>
            </NavLink>

            <nav>
              <ul>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/help">Help</NavLink></li>
                <li><a className="btn btn-secondary" href={ window.location.protocol + '//app.' + window.location.hostname }>Login</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          {this.props.children}
        </main>
        <footer className="textonly">
          <div className="container">
            <RequestForm></RequestForm>
            <nav className="text-center">
              <div className="grid">
                <div className="grid__col grid__col--3-of-4">
                  <ul>
                    <li><NavLink to="/help" activeClassName="active">Help</NavLink></li>
                    <li><NavLink to="/terms" activeClassName="active">Terms</NavLink></li>
                    <li><NavLink to="/privacy" activeClassName="active">Privacy</NavLink></li>
                  </ul>
                </div>
                <div className="grid__col grid__col--1-of-4">
                  <span className="copyright">&copy; {new Date().getUTCFullYear()} Rafi Properties</span>
                  <div className="clear"></div>
                </div>
              </div>
            </nav>
          </div>
        </footer>
      </div>
    )
  }
}

export default MainLayout
