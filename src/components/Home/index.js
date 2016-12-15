// src/components/Home/index.js

import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import HashScroll from 'react-scrollchor';
import About from './about';

import './style.css';

class Home extends Component {

  componentDidMount() {
    document.title = "Rafi Payment";
  }

  render() {
    const { className, ...props } = this.props;

    return (
      <div className={classnames('Home', className)}>
        <div className="upper">
          <div className="container">
            <div className="copy">
              <h1>Pay your rent,<br />Anywhere.</h1>
              <HashScroll className="btn btn-secondary btn-lg" to="#about" animate={{offset: 20, duration: 600}}>More Info</HashScroll>
            </div>
          </div>
        </div>
        <About></About>
      </div>
    );
  }
}

export default Home;
