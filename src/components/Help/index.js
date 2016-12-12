// src/components/Help/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class About extends Component {
  componentDidMount() {
    document.title = "Help | Rafi Payment";
  }

  render() {
    const { className, ...props } = this.props;

    return (
      <div className={classnames('Help', className)}>
        <div className="container">
          <div className="copy">
            <h1>This is the help page</h1>
          </div>
        </div>
      </div>
    );
  }
}
