import React from 'react';
import { Link } from 'react-router';

// packages
// import HashScroll from 'react-scrollchor';

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
                {/* <li><HashScroll to="#about" animate={{offset: 20, duration: 600}}>About</HashScroll></li> */}
                <li><Link to="/#about" activeClassName="active">About</Link></li>
                <li><Link to="/help" activeClassName="active">Help</Link></li>
                <li><a className="btn btn-secondary" href="https://plutus.dev">Login</a></li>
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
                    {/* <li><HashScroll to="#about" animate={{offset: 20, duration: 600}}>About</HashScroll></li> */}
                    <li><Link to="/help" activeClassName="active">Help</Link></li>
                    <li><Link to="/terms" activeClassName="active">Terms</Link></li>
                    <li><Link to="/terms" activeClassName="active">Privacy</Link></li>
                    {/* <li><a href="https://plutus.dev">Login</a></li> */}
                  </ul>
                  <span className="copyright">&copy; {new Date().getUTCFullYear()} Rafi Properties</span>
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
