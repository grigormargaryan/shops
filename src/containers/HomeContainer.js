import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { func } from 'prop-types'
import HomeComponent from '../components/home/HomeComponent'
import { getFavoriteSkills } from '../actions/shops'

class HomeContainer extends Component {
	componentDidMount() {
		this.props.getFavoriteSkills()
	}

	render() {
		return <HomeComponent name="sipan" />
	}
}

HomeContainer.propTypes = {
    getFavoriteSkills: func.isRequired
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({ getFavoriteSkills }, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeContainer)
