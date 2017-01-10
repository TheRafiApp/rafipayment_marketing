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
        <div className="container medium">
          <h1>Help</h1>

          <h2>FAQ</h2>

          <div className="group">
            <h3>Who is the payment processor for Rafi Payment?</h3>

            <p><a href="http://dwolla.com" target="_blank">Dwolla</a> is a
            powerful payments platform that securely connects to bank or credit
            union accounts to enable the transfer of money for any
            individual or organization in the U.S.</p>
          </div>

          <div className="group">
            <h3>Is Rafi Payment secure?</h3>

            <p>We use SSL to protect your activity, all of your traffic is
            strongly encrypted. We also do not store any sensitive data on our
            servers, all banking is done through Dwolla.</p>
          </div>

          <div className="group">
            <h3>What is Instant Account Verification?</h3>

            <p>Instant Account Verification is a method of verifying a bank
            account by logging into your online banking account, through our
            secure payment processor, Dwolla. This is the preferred Verification
            method, as it is much faster and easier than micro deposits. Again,
            we never have any access to your private banking information, and do
            not store any sensitive data on our servers.
            </p>

          </div>

          <div className="group">
            <h3>What are Micro Deposits?</h3>

            <p>Micro deposits are an alternative way to verify your bank account.
            Dwolla will make two small deposits between $0.01 and $0.10 into the
            bank account you provided. Keep an eye out for these—they typically
            show up within 1-3 business days—and note the specific amounts. Then
            go to the payment section of your account, and enter the amounts.
            </p>

          </div>

          <div className="group">
            <h3>Why is my transaction still pending?</h3>

            <p>A bank or credit union transaction usually takes 3–4 business days
            to complete via the Automated Clearing House network (ACH) used by
            banks to transfer funds. Please note that transfers take longer to
            complete if over a weekend or a holiday.</p>
          </div>

          <div className="group">
            <h3>Why did my transaction fail?</h3>

            <p>Sometimes transactions to or from a bank or credit union can fail.
            Here are a few reasons why a transaction can fail:</p>

            <ul>
              <li>
                Insufficient funds. There are insufficient funds in the
                sending bank or credit union account to complete the transaction.
              </li>
              <li>
                Frozen account. A bank or credit union account has been frozen.
              </li>
              <li>
                Other reasons. A bank or credit union rejects the transaction
                for some other reason.Other reasons. A bank or credit union
                rejects the transaction for some other reason.
              </li>
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
            <p>Please feel free to reach out to us at any time, whether you are
            having a problem or just have a question. We'll get back to you as
            soon as possible!</p>
          </div>

          <a className="btn btn-secondary" href="mailto:leasing@rafiproperties.com?subject=Customer Support Request">Contact Support</a>

        </div>
      </div>
    );
  }
}
