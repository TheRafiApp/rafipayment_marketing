import React from 'react';
import { Link } from 'react-router';

import HashScroll from 'react-scrollchor';

import Logo from './logo';

import './main-layout.css';

const MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header className="primary-header">
          <div className="container">
            <Link className="logo" to="/" activeClassName="active">
              <Logo></Logo>
            </Link>

            <nav className="primary-aside">
              <ul>
                <li><HashScroll to="#about" animate={{offset: 20, duration: 600}}>About</HashScroll></li>
                <li><Link to="/help" activeClassName="active">Help</Link></li>
                <li><a className="btn btn-secondary" href="https://plutus.dev">Login</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
});

export default MainLayout;
