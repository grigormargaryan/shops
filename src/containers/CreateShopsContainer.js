import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {func} from 'prop-types'
import {confirmEmail} from '../actions/auth'
import {createShop} from '../actions/shops'
import {withRouter} from 'react-router-dom'
import {authErrors, isAuthenticated} from '../reducers'
import CreateShopsComponent from '../components/create-shops/CreateShopsComponent'
import * as notification from './notification';


class CreateShopsContainer extends Component {

  state = {
    confirmcode: '',
  }

  constructor(props) {
    super(props)
    this.props.confirmEmail(this.props.match.params.token)
    this.state.confirmcode = this.props.match.params.token
  }

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      return this.props.history.push('/')
    }

    if (this.props.errors) {
      this.props.history.push('/')
      notification.createNotification('error' , this.props.errors);
    }
  }


  onSubmit = values => {
    values.confirmcode = this.state.confirmcode
    this.props.createShop(values)
  }

  render() {
    return <CreateShopsComponent
      onSubmit={this.onSubmit}
    />
  }
}

CreateShopsContainer.propTypes = {
  confirmEmail: func.isRequired,
  createShop: func.isRequired
}

const mapStateToProps = state => ({
  errors: authErrors(state),
  isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({confirmEmail, createShop}, dispatch)

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateShopsContainer)
)
