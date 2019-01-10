import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RecruiterLoginComponent from '../components/recruiter-login/RecruiterLoginComponent'
import { login } from '../actions/auth'
import { authErrors, isAuthenticated } from '../reducers'

class RecruiterLoginContainer extends Component {
  state = {
    login: '',
    password: '',
    password_type: false,
  }

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/')
    }
  }
  onSubmit = values => {
    window.alert(JSON.stringify(values,null,4))
    this.props.login(this.state.login, this.state.password)
  }

  showPassword = () => {
    this.setState({
      password_type: !this.state.password_type
    })
  }

  render() {
    return (
      <div className="login-page">
        <RecruiterLoginComponent
          onSubmit={this.onSubmit}
          showPassword={this.showPassword}
          state={this.state}
          errors={this.props.errors}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errors: authErrors(state),
  isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecruiterLoginContainer)
