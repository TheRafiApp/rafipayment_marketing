// src/components/Help/index.js
import React, { Component } from 'react';
import { scrollToElement } from '../../utils';
import classnames from 'classnames';

import './style.css';

export default class Help extends Component {
  static defaultProps = {
    isMounted: false
  }

  componentDidMount() {
    this._isMounted = true;
    document.title = "Help | Rafi Payment";
    this.checkForAnchor()
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  checkForAnchor() {
    const anchor = window.location.hash;
    if (anchor) scrollToElement(anchor, 600)
    else scrollToElement('body')
  }

  render() {
    console.log('renderHelp')
    if (this._isMounted) this.checkForAnchor()

    const { className } = this.props;

    return (
      <div className={classnames('Help', 'content', className)}>
        <div className="container">
          <h1>Help</h1>

          <h2>FAQ</h2>

          <div className="group">
            <h3>Who is the payment processor for Rafi Payment?</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse pharetra dui turpis, in pulvinar nulla tincidunt vitae.
            Integer rutrum, nunc at aliquam sagittis, quam tortor facilisis est,
            ut dictum velit arcu ut est. Pellentesque porttitor pellentesque
            ligula, a commodo nibh mattis et. Suspendisse eleifend posuere turpis,
            sed consectetur est fringilla sit amet. Sed rhoncus diam non nibh
            pulvinar, at blandit dolor malesuada. Mauris sem dui, auctor eu turpis
            non, aliquet iaculis lectus. Vestibulum vel ante mi. Nunc non tempor
            ipsum, molestie varius urna.</p>
          </div>

          <div className="group"></div>
          <h3>What is Dwolla?</h3>

          <p>Dwolla is a powerful payments platform that securely connects to
          bank or credit union accounts to enable the transfer of money for any
          individual or organization in the U.S.</p>

          <div className="group">
            <h3>Why is my transaction still pending?</h3>

            <p>A bank or credit union transaction usually takes 3–4 business days
            to complete via the Automated Clearing House network (ACH) used by
            banks to transfer funds. Please note that transfers take longer to
            complete if over a weekend or a holiday.</p>
          </div>

          <div className="group">
            <h3>Why did the transaction fail?</h3>

            <p>Sometimes transactions to or from a bank or credit union can fail. Here are a few reasons why a transaction can fail:</p>

            <ul>
              <li>Insufficient funds. There are insufficient funds in the sending bank or credit union account to complete the transaction.</li>
              <li>Frozen account. A bank or credit union account has been frozen.</li>
              <li>Other reasons. A bank or credit union rejects the transaction for some other reason.Other reasons. A bank or credit union rejects the transaction for some other reason.</li>
            </ul>

            <p>If a transaction fails, please contact your bank or credit union to
            check on the status of your account. Then either re-initiate the
            transaction or ask your financial institution why the transaction may
            not be processed.</p>
          </div>

          <div className="group">
            <h3>How does Dwolla protect customers’ data?</h3>

            <p>Dwolla protects customers’ data through secure servers and a
            world-class cloud environment. Dwolla’s servers are encrypted with
            128-bit or greater encryption controlled by Transport Layer Security
            (TLS), and sit behind firewall and intrusion protection. Our cloud
            service offers a highly secure environment with a dedicated security
            team.</p>
          </div>


          <h2>Support</h2>

          <div className="group">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse pharetra dui turpis, in pulvinar nulla tincidunt vitae.
            Integer rutrum, nunc at aliquam sagittis, quam tortor facilisis est,
            ut dictum velit arcu ut est. Pellentesque porttitor pellentesque
            ligula, a commodo nibh mattis et. Suspendisse eleifend posuere turpis,
            sed consectetur est fringilla sit amet.</p>
          </div>

          <a className="btn btn-secondary" href="mailto:leasing@rafiproperties.com?subject=Customer Support Request">Contact Support</a>

        </div>
      </div>
    );
  }
}
