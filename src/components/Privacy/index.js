// src/components/Privacy/index.js
import React, { Component } from 'react';
import { scrollToElement } from '../../utils';
import classnames from 'classnames';

import './style.css';

export default class Privacy extends Component {
  static defaultProps = {
    isMounted: false
  }

  componentDidMount() {
    this._isMounted = true;
    document.title = "Privacy Policy | Rafi Payment";
    this.checkForAnchor();
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
      <div className={classnames('Privacy', 'content', className)}>
        <div className="container">
          <h1>Privacy Policy</h1>

          {/* Begin privacy policy */}

          <p>This privacy policy sets out how Rafi Payment, LLC uses and protects any information that you the user gives Rafi Payment, LLC when you use this app.</p>
<p>Rafi Payment, LLC is dedicated to ensuring that your privacy is protected. If we ask you to provide certain information by which you can be identified when using this app, then you can be guaranteed that it will only be used in accordance with this privacy policy.</p>
<p>Rafi Payment, LLC may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from December 16, 2016.</p>
<p><strong>What we collect</strong></p>
<p>We may collect the following information:</p>
<ul>
<li>Name and title</li>
<li>Contact information including email address and cell number</li>
<li>Demographic information such as postal code and address</li>
<li>Rental type and amount</li>
<li>Other information relevant to our app platform.</li>
</ul>
<p><strong>What we do with the information we gather</strong></p>
<p>We require this information to understand your needs and provide you with a better service, and for the following reasons:</p>
<ul>
<li>We may use the information to customize the app according to your interests.</li>
<li>Internal record keeping.</li>
<li>We may use the information to improve our products and services.</li>
<li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
<li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail.</li>
<li>We may use this data in the future for third party marketing purposes and sales.</li>
</ul>
<p><strong>Security</strong></p>
<p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>
<p><strong>How we use cookies</strong></p>
<p>A cookie is a small file which asks permission to be placed on your computer&#39;s hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.</p>
<p>We use traffic log cookies to identify which pages are being used. This helps us analyze data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.</p>
<p>Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.</p>
<p>You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</p>
<p><strong>Links to other websites</strong></p>
<p>Our website may contain links to enable you to visit other websites of interest easily. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.</p>
<p><strong>Controlling your personal information</strong></p>
<p>You may choose to restrict the collection or use of your personal information in the following ways:</p>
<ul>
<li>whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes</li>
<li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by emailing us at leasing@Rafiproperties.com.</li>
</ul>
<p>You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be chargeable as an admin fee. If you would like a copy of the information held on you please write to Rafi Payment, PO Box 120003, Boston MA 02112.</p>
<p>If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.</p>
<p>Rafi Payment</p>
<p>PO Box 120003,</p>
<p>Boston, MA 02112</p>
<p><a href="mailto:leasing@rafiproperties.com">leasing@rafiproperties.com</a></p>
<p>Last Modified: December 19, 2016</p>

          {/* End privacy policy */}
        </div>
      </div>
    );
  }
}
