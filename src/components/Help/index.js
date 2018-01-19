import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { scrollToElement } from '../../utils';
import classnames from 'classnames';

import './style.css';

export default class Help extends Component {
  static propTypes = {
    className: PropTypes.string
  }
  static defaultProps = {
    isMounted: false
  }

  componentDidMount() {
    this._isMounted = true;
    document.title = 'Help | Rafi Payment';
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
    if (this._isMounted) this.checkForAnchor()

    const { className } = this.props;

    return (
      <div className={classnames('Help', 'content', className)}>
        <div className="container medium">
          <h1>Help</h1>

          <h2 id="faq">FAQ</h2>

          <div className="group" id="caniuse">
            <h3>Can I use Rafi Payment? <Link className="anchor-link" to="/help/#caniuse">#</Link></h3>

            <p>Currently, Rafi Payment is invite-only and and available
            exclusively for tenants of Rafi Properties. Rafi Payment is available for Android and iOS, and as a web application.</p>
          </div>

          <div className="group" id="dwolla">
            <h3>Who is the payment platform for Rafi Payment? <Link className="anchor-link" to="/help/#dwolla">#</Link></h3>

            <p><a href="http://dwolla.com" target="_blank" rel="noopener noreferrer">Dwolla</a> is a
            powerful payments platform that securely connects to bank or credit
            union accounts to enable the transfer of money for any
            individual or organization in the U.S.</p>
          </div>

          <div className="group" id="security">
            <h3>Is Rafi Payment secure? <Link className="anchor-link" to="/help/#security">#</Link></h3>

            <p>We use <a href="https://en.wikipedia.org/wiki/Transport_Layer_Security" target="_blank" rel="noopener noreferrer">SSL</a> to protect your activity, all of your activity is
            protected via encryption.</p>
          </div>

          <div className="group" id="mobile-onboarding">
            <h3>How do I set up my account using the mobile app? <Link className="anchor-link" to="/help/#mobile-onboarding">#</Link></h3>

            <p>If you are a new tenant, and you would like to use our mobile app,
            first <Link to="/#download">download the app</Link> on your device.
            Then open the invitation email on your mobile device, and click the
            activate button. If you click the activate button without having the
            mobile app installed, it will open the web version.
            </p>
          </div>

          <div className="group" id="iav">
            <h3>What is Instant Account Verification? <Link className="anchor-link" to="/help/#iav">#</Link></h3>

            <p>Instant Account Verification is a method of verifying a bank
            account by logging into your online banking account, a third party
            service offered by our secure payment provider, Dwolla. This is the
            preferred verification method, as it is much easier and faster than
            microdeposits.
            </p>

            <p>The majority of banks support Instant Account Verification, but if
            your bank does not, you will have to use microdeposit verification.
            </p>

          </div>

          <div className="group" id="bank-login">
            <h3>Why am I being asked for my bank login credentials? <Link className="anchor-link" to="/help/#bank-login">#</Link></h3>

            <p>{"Don't"} be alarmed, this is just one way of verifying you own the
            bank account you are linking to your Rafi Payment account. The login
            data never goes to our server. Every security precaution has been
            taken to ensure your data remains private and secure.
            </p>

            <p>If you are still not comfortable using your bank login credentials
            for Instant Account Verification, you may use micro-deposit verification
            instead.
            </p>

          </div>

          <div className="group" id="microdeposits">
            <h3>What are micro-deposits? <Link className="anchor-link" to="/help/#microdeposits">#</Link></h3>

            <p>Micro-deposits are an alternative way to verify your bank account.
            Two small deposits between $0.01 and $0.10 will be made into the
            bank account you provided. They should show up within 1-3 business days.
            Note the specific amounts, then go to your account <a href="https://app.payment.rafiproperties.com/account/payment">payment settings</a>,
            and enter the amounts to complete the verification process.
            </p>

            <p>
              If micro-deposits are rejected by your bank, you can retry them via your account payment settings,
              or <a href="mailto:leasing@rafiproperties.com?subject=Customer Support - Rafi Payment">contact customer support.</a>
            </p>

          </div>

          <div className="group" id="maxattempts">
            <h3>What do I do if I reach the maximum attempts for micro-deposit verification? <Link className="anchor-link" to="/help/#maxattempts">#</Link></h3>

            <p>Unfortunately, for security reasons this will increase the amount
            of time it will take to verify your account. You will need to follow
            these steps:</p>

            <ol>
              <li>Remove the new bank account from your account <a href="https://app.payment.rafiproperties.com/account/payment">payment settings</a>.</li>
              <li>Wait 48 hours after the bank account was originally added to re-add the bank account.</li>
              <li>Initiate new micro-deposits to the bank account.</li>
              <li>Verify the bank account using the new posted micro-deposit amounts.</li>
            </ol>

            <p>
               If you are still having problems with this after retrying, <a href="mailto:leasing@rafiproperties.com?subject=Customer Support - Rafi Payment">contact customer support.</a>
            </p>

          </div>

          <div className="group" id="rent-split">
            <h3>What is rent split? <Link className="anchor-link" to="/help/#rent-split">#</Link></h3>

            <p>We need to know exactly how you and your roommates divide up your
            rent each month, in order to keep things fair. If you
            have <Link className="anchor-link" to="/help/#autopay">autopay</Link> turned
            on, your split amount is how much you are charged automatically.
            If you do not use autopay, your rent split amount will be suggested
            as the amount of your manual payment when you pay rent. We also use
            your rent split to determine how to carry over unpaid balances from
            your rent bills.
            </p>
            
          </div>

          <div className="group" id="zero-split">
            <h3>What if I’m not the one who pays my rent? <Link className="anchor-link" to="/help/#zero-split">#</Link></h3>

            <p>If your rent is paid by someone you live with, they can simply
            set their rent split to 100% of the rent. If your rent is paid by a
            parent or someone else who doesn’t live with you, you should contact
            customer support so we can make arrangements for them to pay for you.
            </p>

          </div>

          <div className="group" id="autopay">
            <h3>How does autopay work? <Link className="anchor-link" to="/help/#autopay">#</Link></h3>

            <p>We recommend setting up autopay when you activate your account. Your
            rent split amount will be automatically charged to the bank account
            you provided on the day your rent is due. You will be notified by
            email 5 days before we charge you, and again after the transfer has
            been created.
            </p>

            <p>If you would prefer not to use autopay, that’s fine too. You will
            receive notifications to remind you to pay your rent.
            </p>

          </div>

          <div className="group" id="transaction-pending">
            <h3>Why is my transaction still pending? <Link className="anchor-link" to="/help/#transaction-pending">#</Link></h3>

            <p>A bank or credit union transaction usually takes 3–4 business days
            to complete via the Automated Clearing House network (ACH) used by
            banks to transfer funds. Please note that transfers take longer to
            complete if over a weekend or a holiday.
            </p>

          </div>

          <div className="group" id="transaction-failed">
            <h3>Why did my transaction fail? <Link className="anchor-link" to="/help/#transaction-failed">#</Link></h3>

            <p>Sometimes transactions to or from a bank or credit union can fail.
            Here are a few reasons why a transaction can fail:</p>

            <ul>
              <li>
                <strong>Insufficient funds</strong> - There are insufficient funds in the
                sending bank or credit union account to complete the transaction.
              </li>
              <li>
                <strong>Frozen account</strong> - A bank or credit union account has been frozen.
              </li>
              <li>
                <strong>Other reasons</strong> - A bank or credit union
                rejects the transaction for some other reason.
              </li>
            </ul>

            <p>If a transaction fails, please contact your bank or credit union to
            check on the status of your account. Then either re-initiate the
            transaction or ask your financial institution why the transaction may
            not be processed.</p>
          </div>

          <div className="group" id="dwolla-security">
            <h3>How does Dwolla protect customers’ data? <Link className="anchor-link" to="/help/#dwolla-security">#</Link></h3>

            <p>Dwolla protects customers’ data through secure servers and a
            world-class cloud environment. Dwolla’s servers are encrypted with
            128-bit or greater encryption controlled by Transport Layer Security
            (TLS), and sit behind firewall and intrusion protection. Dwolla’s cloud
            service offers a highly secure environment with a dedicated security
            team.</p>
          </div>

          <h2 id="support">Support</h2>

          <div className="group">
            <p>Please feel free to reach out to us at any time, whether you are
            having a problem or just have a question. We’ll get back to you as
            soon as possible!</p>
          </div>

          <a className="btn btn-secondary" href="mailto:leasing@rafiproperties.com?subject=Customer Support - Rafi Payment">Contact Support</a>

        </div>
      </div>
    );
  }
}
