// src/components/Terms/index.js
import React, {Component} from 'react';
import {scrollToElement} from '../../utils';
import classnames from 'classnames';

import './style.css';

export default class Terms extends Component {
  static defaultProps = {
    isMounted: false
  }

  componentDidMount() {
    this._isMounted = true;
    document.title = "Terms of Serivce | Rafi Payment";
    this.checkForAnchor();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  checkForAnchor() {
    const anchor = window.location.hash;
    if (anchor)
      scrollToElement(anchor, 600)
    else
      scrollToElement('body')
  }

  render() {
    if (this._isMounted)
      this.checkForAnchor()

    const {className} = this.props;

    return (
      <div className={classnames('Terms', 'content', className)}>
        <div className="container">
          <h1>Terms of Use</h1>

          {/* Begin terms - updated 8/13/2017 */}

          <h4>By using the Rafi Payment application (the "Service") you agree to be bound by the following terms and conditions ("Terms of Use").</h4>

          <ol>
            <li>These terms of service are specifically for using our software and is not representative of your lease agreement with landlord/property management. These Terms of Service are not a lease agreement.</li>

            <li>The Service allows property management companies to collect rent payments and tenants to make online rent payments.</li>

            <li>Paying your rent with Rafi Payment is free for tenants. Rafi Payment is currently free for landlords: there is no charge to receive rent payments. If this policy changes, all users will be provided sufficient notice in advance. You can cancel service anytime. We do not offer refunds for any fees you have already paid.</li>

            <li>Rafi Payment uses Dwolla to execute online payment transactions. In order to use the payment functionality of Rafi Payment, you must authorize us to create a customer account on your behalf, provided by Dwolla, Inc. ("Dwolla") and you must accept the
              Dwolla <a href="https://www.dwolla.com/legal/tos?whitelabel">Terms of Service</a> and <a href="https://www.dwolla.com/legal/privacy?whitelabel">Privacy Policy</a>. Any funds held in the Dwolla account are held by Dwolla's financial institution partners as set out in the Dwolla Terms of Service. You authorize Rafi Payment to share your identity and account data with Dwolla for the purposes of opening and supporting your Dwolla account, and you are responsible for the accuracy and completeness of that data. You understand that you will access and manage your Dwolla account through Rafi Payment's software, and Dwolla account notifications will be sent by Rafi Payment, not Dwolla. We will provide customer support for your Dwolla account activity, and can be reached at <a href="mailto:leasing@rafiproperties.com">leasing@rafiproperties.com</a> and/or <strong>(617) 610-1739</strong>
            </li>

            <li>This may be updated from time to time. For avoidance of doubt, if any payment you initiate using the Service does not successfully complete, the payee reserves the right to seek payment from you via or outside the Service. Any authorization you provide to make repeating automatic payments using the Service will remain in effect until cancelled.</li>

            <li>Rafi Payment does not take direct custody of money you transfer using the Service and we are not responsible for what recipients do with the payments you make. For example, we are not responsible for your landlord returning your deposit. If a payor or payor's bank or card issuer initiates a reversal, chargeback, or dispute of a payment made to you, you authorize us and our third-party payment providers to reverse or otherwise debit funds from your account in accordance with applicable financial institution and network policies and procedures. In the event we are unable to reverse or otherwise debit funds from your account, you agree promptly to deposit such funds upon our request. We may also initiate a reversal or other debit, or take other actions we determine to be appropriate, if we believe fraud or other abuse of the Service has occurred.</li>

            <li>We use third-party identity verification services to help ensure that users are who they say they are prior to enabling certain features of the Services, such as electronic payments. However, we neither control nor guarantee the accuracy of any identity verification service (and none can prevent all scams), so you should always take the same precautions in dealing with others through our site that you would in person.</li>

            <li>We are not a real estate agent or broker. We do not screen properties or listings or offer any guaranty or advice regarding the suitability of properties, landlords, or potential tenants. Nothing we say should be construed as such advice, and you agree not to rely on us in making decisions on, well, anything at all.</li>

            <li>Rafi Payment's tenant selection and confirmation features are designed to make communication between landlords and prospective tenants easier; neither they nor any other aspect of the Service are intended to create any kind of contract or other legal obligation between a landlord and a prospective tenant (or between anyone else, for that matter). Just like in the offline world, you should wait until a written rental or lease agreement is signed by both the landlord and tenant before relying on any tenancy you arrange using Rafi Payment.</li>

            <li>You must be 18 years old and a resident of the United States to use Dwolla, therefore Rafi Payment also has this requirement.</li>

            <li>Accounts registered by bots or automated methods of access are not permitted. No scraping, reproducing, or aggregating the data or other content on our site is permitted.</li>

            <li>Use of the Service does not give you ownership of any intellectual property rights in the Service or any content posted on the Service. You own what you post on the Service but you grant us a license to copy, host, display, create derivative works from, publish, publicly perform, display, and distribute, and otherwise make use of in connection with providing the Service, all information and content you post so long as you have an active account. If you are a landlord and authorize us (by checking the appropriate box or boxes on our site) to syndicate your rental listing on third-party sites, you further agree that we may grant sublicenses to applicable third parties as necessary to facilitate such syndication.</li>

            <li>You must provide your full legal name, a valid email address, and any other information requested in order to complete the signup process. You are also responsible for keeping your email address up to date, so we can send you important notices.</li>

            <li>Your account may only be used by one person. A single account shared by more than one person is not permitted.</li>

            <li>You are responsible for keeping your password and account secure.</li>

            <li>You are responsible for the accuracy of everything that is submitted under your account.</li>

            <li>We are not responsible for the conduct of users on or off the application.</li>

            <li>You may not use the Service for any illegal purpose. You may not, in using the Service, violate any laws in your jurisdiction or ours, or infringe the rights of anyone (ours or third parties). You may not use the Service as part of any fraudulent scheme or transaction. If we have reason to suspect your account has been used for an unauthorized or illegal purpose, you agree that we may share information about you, your account, and any of your transactions with law enforcement.</li>

            <li>If you are a landlord, you agree in particular that you are familiar with all applicable fair-housing and antidiscrimination laws and that you will adhere to them.</li>

            <li>You may not abuse, harass, threaten, impersonate, or intimidate other Rafi Payment customers.</li>

            <li>If you violate any of the Terms of Use, we may terminate your account without notice.</li>

            <li>We reserve the right to terminate the Service for any reason, without notice, at any time.</li>

            <li>We reserve the right to alter these Terms of Use at any time. We will notify you on the site or via email of important changes. You are free to cancel or discontinue using the Service at any time without penalty. Your continued use of the Service following a change to these Terms of Use constitutes acceptance of the change.</li>

            <li>If our pricing policy changes, we will give you at least 30 days&#39; notice, via the site or email.</li>

            <li>We reserve the right to refuse service to anyone for any reason, and likewise to suspend or discontinue your use of the Service at any time for any reason. In particular, we may terminate or suspend your account if you engage in fraudulent or illegal conduct, provide inaccurate, incomplete, false, or misleading information, or otherwise violate these Terms of Use or any of our policies, or if we determine, in our sole discretion, that your use of the Services poses an unacceptable credit or fraud risk to us.</li>

            <li>If you wish to cancel your account, contact customer support.</li>

            <li>If you cancel your account, any or all of your information may be immediately (or at some point in the future) irrevocably deleted.</li>

            <li>Conversely, information you post or otherwise furnish to us, including personal information, may remain on our servers indefinitely (for example, as backups) after you delete it from public areas of the Services or request cancellation of your account.</li>

            <li>If you are a landlord, you agree to indemnify, defend, and hold harmless us and our affiliates, agents, officers, employees, and vendors (including without limitation our third-party credit reporting agencies and their respective affiliates, agents, officers, and employees) from any claim, suit, action, or loss arising from or relating to your use of the Service or your violation of these Terms of Use (collectively, any "Claim"), including any liability or expense arising from claims, losses, damages, suits, judgments, civil or criminal fines or other penalties, litigation costs, and attorneys' fees.</li>
          </ol>

          <p>THE SERVICE IS PROVIDED "AS-IS" WITHOUT PROMISES OF ANY KIND. NEITHER WE NOR OUR SUPPLIERS WARRANT OR GUARANTEE UPTIME OR AVAILABILITY OF THE SERVICE, THAT THE SERVICE WILL MEET OR CONTINUE IN THE FUTURE TO MEET YOUR NEEDS, OR THAT WE WILL CONTINUE TO PROVIDE THE SERVICE OR ANY ASPECT OF THE SERVICE IN THE FUTURE. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES FOR THE SERVICE, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, SEAWORTHINESS, AND NON-INFRINGEMENT.</p>

          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE WILL NOT BE LIABLE RESPONSIBLE FOR LOST PROFITS, REVENUES, OR DATA, FINANCIAL LOSSES, OR INDIRECT, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES. TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE SERVICES OR THESE TERMS OF USE, INCLUDING ANY CLAIM FOR ANY IMPLIED WARRANTY, IS LIMITED TO THE AMOUNT YOU PAID TO US TO USE THE SERVICES.</p>

          <ol>
            <li>If you violate any of these terms and we do not take immediate action, that does not mean we are waiving any of our rights. Any parties seeking to pursue litigation against Rafi Payment must do so in the state or federal courts located in Boston, Massachusetts, and will consent to personal jurisdiction in those courts. Massachusetts Law will apply to any such disputes between said parties and Rafi Payment. If any part of these Terms of Use are held to be invalid or enforceable, the remainder of the Terms of Use will still apply.</li>

            <li>Any legal notices should be sent to the following address:</li>
          </ol>

          <p>
            Rafi Payment<br />
            PO BOX 120003<br />
            Boston MA 02110
          </p>

          <p>If you have any questions, contact us at <a href="mailto:leasing@rafiproperties.com">leasing@rafiproperties.com</a> or <strong>(617) 610-1739</strong></p>

          <p>Last revised July 13, 2017</p>

          {/* End terms */}
        </div>
      </div>
    );
  }
}
