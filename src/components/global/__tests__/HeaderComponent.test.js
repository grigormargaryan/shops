import React from 'react'
import { Link } from 'react-router-dom'
import HeaderComponent from '../HeaderComponent'

describe('test HeaderComponent', () => {
	beforeEach(() => {
		let wrapper, campus
	})

	it('renders 1 HeaderComponent', () => {
		const wrapper = shallow(<HeaderComponent />)
		expect(wrapper).toHaveLength(1)
	})

	it('should not show logout button when user is not logged in', () => {
		const isAuthenticated = false
		const wrapper = shallow(<HeaderComponent isAuthenticated={isAuthenticated} />)
		const logout = 	<Link className="nav-link disabled" to="#">Logout</Link>
		expect(wrapper.contains(logout)).toEqual(false)
	})

	it('should not show login/registration button when user id logged in', () => {
		const isAuthenticated = true
		const wrapper = shallow(<HeaderComponent isAuthenticated={isAuthenticated} />)
		const login = 	<Link className="nav-link" to="/login">Sign In</Link>
		const registration = 	<Link className="nav-link disabled" to="/registration">Sign Up</Link>
		expect(wrapper.contains(login)).toEqual(false)
		expect(wrapper.contains(registration)).toEqual(false)
	})
})
