import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginComponent from '../components/login/LoginComponent'
import { login } from '../actions/auth'
import { authErrors, isAuthenticated } from '../reducers'
import * as notification from './notification';


class LoginContainer extends Component {
	state = {
		login: '',
		password: '',
		password_type: false,
	}

	componentDidUpdate() {
		if (this.props.isAuthenticated) {
			this.props.history.push('/')
		}
    if (this.props.errors) {
      this.props.history.push('/')
      notification.createNotification('error' , this.props.errors);
    }
	}
	onSubmit = values => {
		this.props.login(values.email, values.password)

	}


  showPassword = () => {
		this.setState({
      password_type: !this.state.password_type
		})
	}


	render() {
		return (
			<div className="login-page">
				<LoginComponent
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
)(LoginContainer)
