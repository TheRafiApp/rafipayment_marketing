import React from 'react'
import {Request} from '../../utils'
import './request_form.css'

class RequestForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()

    if (!this.state.value) {
      return this.setState({
        error: 'Please enter an email address',
        success: false
      })
    }

    this.setState({error: false, success: false, loading: true})

    const data = {
      'email': this.state.value
    }

    return new Request(window.location.protocol + '//ms.' + window.location.hostname, {
      method: 'POST',
      body: data
    })
    .then((data) => {
      if (data.message) {
        this.setState({
          error: false,
          success: data.message,
          loading: false
        })
      } else if (data.error) {
        this.setState({
          error: data.error,
          success: false,
          loading: false
        })
      }
    })
  }

  renderLoading() {
    if (this.state.loading) {
      return (
        <div className="loading"></div>
      )
    }
  }

  renderErrors() {
    if (this.state.error) {
      let state = this.state.error
      let listName = 'List_RoleEmailMember: '
      let error = state.indexOf(listName) > -1
        ? state.split(listName)[1]
        : this.state.error

      return (
        <div className="message error">
          {error}
        </div>
      )
    }
  }

  renderSuccess() {
    if (this.state.success) {
      return (
        <div className="message success">
          {this.state.success}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="request-form text-center">
        <form onSubmit={this.handleSubmit}>
          <h2>Request Early Access</h2>
          <div className="grid">
            <div className="grid__col grid__col--1-of-3">
              <p>Are you a landlord? Want to receive updates about Rafi Payment? Rafi Payment is invite-only, if you’d like to be an early adopter, submit your email address and we’ll reach out to you.</p>

              <input type="text" className="email-input" placeholder="Email" value={this.state.value} onChange={this.handleChange}/>

              <input className="btn btn-secondary" type="submit" value="SEND"/> {this.renderLoading()}
              {this.renderErrors()}
              {this.renderSuccess()}

            </div>
          </div>

        </form>
      </div>
    )
  }
}

export default RequestForm
