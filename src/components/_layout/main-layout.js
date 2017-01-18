import React from 'react';
import { Link } from 'react-router';

// layout
import Logo from './logo';
import RequestForm from './request_form';

// css
import './main-layout.css';
 
const MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header>
          <div className="container">
            <Link className="logo" to="/" activeClassName="active">
              <Logo></Logo>
            </Link>

            <nav>
              <ul>
                <li><Link to="/#about" activeClassName="active">About</Link></li>
                <li><Link to="/help" activeClassName="active">Help</Link></li>
                <li><a className="btn btn-secondary" href={ location.protocol + '//app.' + location.hostname }>Login</a></li>
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
                    <li><Link to="/help" activeClassName="active">Help</Link></li>
                    <li><Link to="/terms" activeClassName="active">Terms</Link></li>
                    <li><Link to="/privacy" activeClassName="active">Privacy</Link></li>
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
    );
  }
});

export default MainLayout;
