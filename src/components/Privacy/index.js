import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { scrollToElement } from '../../utils'
import classnames from 'classnames'

import './style.css'

export default class Privacy extends Component {
  static propTypes = {
    className: PropTypes.string
  }
  static defaultProps = {
    isMounted: false
  }

  componentDidMount() {
    this._isMounted = true
    document.title = 'Privacy Policy | Rafi Payment'
    this.checkForAnchor()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  checkForAnchor() {
    const anchor = window.location.hash
    const options = anchor
      ? [anchor, 600]
      : ['body']
    return scrollToElement(...options)
  }

  render() {
    if (this._isMounted) this.checkForAnchor()

    const { className } = this.props

    return (
      <div className={classnames('Privacy', 'content', className)}>
        <div className="container">
          <h1>Privacy Policy</h1>

          {/* Begin privacy policy */}

          <p>This privacy policy sets out how Rafi Payment uses and protects any information that you the user gives Rafi Payment when you use this app.</p>
          <p>Rafi Payment is dedicated to ensuring that your privacy is protected. If we ask you to provide certain information by which you can be identified when using this app, then you can be guaranteed that it will only be used in accordance with this privacy policy.</p>
          <p>Rafi Payment may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from December 16, 2016.</p>
          <p>
            <strong>What we collect</strong>
          </p>
          <p>We may collect the following information:</p>
          <ul>
            <li>Name</li>
            <li>Contact information including email address and phone number</li>
            <li>Demographic information such as postal code and address</li>
            <li>Rental type and amount</li>
            <li>Other information relevant to our app platform.</li>
          </ul>
          <p>
            <strong>What we do with the information we gather</strong>
          </p>
          <p>We require this information to understand your needs and provide you with a better service, and for the following reasons:</p>
          <ul>
            <li>We may use the information to customize the app according to your interests</li>
            <li>Internal record keeping</li>
            <li>We may use the information to improve our products and services</li>
            <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided</li>
            <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail</li>
            <li>We may use this data in the future for third party marketing purposes and sales</li>
          </ul>
          <p>
            <strong>Security</strong>
          </p>
          <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>
          <p>
            <strong>Local Storage</strong>
          </p>
          <p>HTML5 local storage is similar to cookies in that they are stored on your computer and can be used to store certain information about your activities and preferences. This data is stored in different parts of your computer from ordinary browser cookies, however. Many Internet browsers allow you to disable HTML5 local storage or delete information contained in HTML5 local storage using browser controls. We use local storage to store basic user preferences and session information so you can stay logged in.
          </p>
          <p>
            <strong>Controlling your personal information</strong>
          </p>
          <p>You may choose to restrict the collection or use of your personal information in the following ways:</p>
          <ul>
            <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by emailing us at <a href="mailto:leasing@Rafiproperties.com">leasing@Rafiproperties.com</a></li>
          </ul>
          <p>You may request details of personal information which we hold about you under the Data Protection Act 1998. If you would like a copy of the information held on you please write to Rafi Payment, PO Box 120003, Boston MA 02112. You will be charged a small fee to cover the expenses of this process.</p>
          <p>If you believe that any information we are holding on you is incorrect or incomplete, please email us. We will promptly correct any information found to be incorrect.</p>
          <p>
            Rafi Payment<br />
            PO BOX 120003<br />
            Boston MA 02110
          </p>
          <p>
            <a href="mailto:leasing@rafiproperties.com">leasing@rafiproperties.com</a>
          </p>
          <p>Last Modified: December 19, 2016</p>

          {/* End privacy policy */}
        </div>
      </div>
    )
  }
}
