import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { func } from 'prop-types'
import RegistrationComponent from '../components/registration/RegistrationComponent'
import { registration } from '../actions/auth'
import { authErrors, getSuccessMsg, isAuthenticated } from '../reducers'

class RegistrationContainer extends Component {
	state = {
		username: '',
		email: '',
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
		this.props.registration(values)
	}

  showPassword = () => {
    this.setState({
      password_type: !this.state.password_type
    })
  }

	render() {
		return (
			<div className="login-page">
				<RegistrationComponent
					onSubmit={this.onSubmit}
          showPassword={this.showPassword}
					errors={this.props.errors}
					successMsg={this.props.successMsg}
					state={this.state}
				/>
			</div>
		)
	}
}

RegistrationContainer.propTypes = {
	registration: func.isRequired
}

const mapStateToProps = state => ({
	errors: authErrors(state),
	isAuthenticated: isAuthenticated(state),
	successMsg: getSuccessMsg(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({ registration }, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RegistrationContainer)
