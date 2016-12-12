// src/components/Home/about.js

import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

import classnames from 'classnames';

class About extends Component {
  //
  // componentDidUpdate() {
  //   let hash = this.props.location.hash.replace('#', '');
  //   if (hash) {
  //     let node = ReactDOM.findDOMNode(this.refs[hash]);
  //     if (node) {
  //       node.scrollIntoView();
  //     }
  //   }
  // }

  render() {
    const { className, ...props } = this.props;

    return (
      <div id="about">
        No Fees, Ever

        Rafi Payment is completely free for tenants. No ACH fees, no user fees, no advertisements.


        Rent Reminders

        Never forget to pay rent on time! Receive email and optional text notifications to remind you that your rent is due.


        Autopay

        Pay your rent automatically every month, or pay manually as you please. Split your rent with your roommates, and receive updates as your roommates pay rent.
      </div>
    );
  }
}

export default About;
