// src/components/NotFound/index.js

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';

import './style.css';

export default class NotFound extends Component {
  static propTypes = {
    className: PropTypes.string
  }
  static defaultProps = {}

  render() {
    const { className } = this.props;
    return (
      <div className={classnames('NotFound', 'content', className)}>
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    );
  }
}
