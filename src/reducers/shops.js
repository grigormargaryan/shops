import * as shops from '../actions/shops'
import jwtDecode from 'jwt-decode'

const initialState = {
  access: undefined,
  refresh: undefined,
  errors: [],
  successMsg: '',
  user: {
    email: '',
    firstName: '',
    lastName: '',
    profilePicURL: ''
  }
}

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}
