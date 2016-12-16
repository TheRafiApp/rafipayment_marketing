// src/components/Home/index.js

import React, { PropTypes, Component } from 'react';
import { getScrollTop, setScrollTop, getOffsetTop } from '../../utils';
import classnames from 'classnames';

import HashScroll from 'react-scrollchor';
import About from './about';

import './style.css';

function easeOutQuad(x, t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
}

class Home extends Component {

  componentDidMount() {
    document.title = "Rafi Payment";

    const anchor = window.location.hash;
    this.handleAnchor(anchor)
  }

  handleAnchor(anchor) {
    // console.log(anchor)
    // console.log(document.querySelectorAll(anchor));
    var element = document.querySelectorAll(anchor)[0];

    const offset = 20;
    const duration = 600;
    const easing = easeOutQuad

    const start = getScrollTop();
    const to = getOffsetTop(element) + offset;
    const change = to - start;
    const increment = 20;

    function animate(elapsedTime) {
      const elapsed = elapsedTime + increment;
      const position = easing(null, elapsed, start, change, duration);
      setScrollTop(position);
      if (elapsed < duration) {
        setTimeout(function() {
          animate(elapsed);
        }, increment);
      }
    }

    animate(0);

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
