import jwtDecode from 'jwt-decode'
import * as auth from '../actions/auth'
import * as shop from '../actions/shops'

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
		case auth.LOGIN_SUCCESS:
		case auth.RESET_SUCCESS:
		case shop.CREATE_SHOPS_SUCCESS:
			return {
				...state,
				access: {
					token: action.payload.access_token,
					...jwtDecode(action.payload.access_token)
				},
        refresh: {
          token: action.payload.refresh_token,
          ...jwtDecode(action.payload.refresh_token)
        },
				user: action.payload.user,
			}
		case auth.FORGOT_SUCCESS:
			return {
				...state,
				successMsg: action.payload.msg
			}
		case auth.REGISTRATION_SUCCESS:
      if(action.payload.access_token && action.payload.refresh_token){
        return {
          ...state,
          access: {
            token: action.payload.access_token,
            ...jwtDecode(action.payload.access_token)
          },
          refresh: {
            token: action.payload.refresh_token,
            ...jwtDecode(action.payload.refresh_token)
          },
          user: action.payload.data,
        }
			}
			return {
				...state,
				successMsg: action.payload.msg
			}
		case auth.TOKEN_RECEIVED:
			return {
				...state,
				access: {
					token: action.payload.access,
					...jwtDecode(action.payload.access)
				}
			}
		case auth.LOGOUT:
			return {
				user: initialState.user,
				token: undefined,
				access: undefined
			}
		case auth.RESET_FAILURE:
		case auth.CONFIRM_FAILURE:
      return {
        ...state,
        errors: action.payload.response.message
      }
		case auth.FORGOT_FAILURE:
			return {
				...state,
				errors: action.payload.response
			}
		case auth.LOGIN_FAILURE:
      return {
        ...state,
        access: undefined,
        refresh: undefined,
        errors: action.payload.response.message
      }

		case auth.REGISTRATION_FAILURE:
			return {
				...state,
				access: undefined,
				refresh: undefined,
				errors: action.payload.response.message
			}
    case shop.CREATE_SHOPS_FAILURE:
      return {
        ...state,
        errors: action.payload.response.message
      }
		case auth.CHANGE_AVATAR:
			return {
				...state,
				user: {
					...state.user,
					avatar: action.payload.avatar
				}
			}
		default:
			return state
	}
}

export function accessToken(state) {
	if (state.access) {
		return state.access.token
	}
}

export function isAccessTokenExpired(state) {
	if (state.access && state.access.exp) {
		return 1000 * state.access.exp - new Date().getTime() < 5000
	}
	return true
}

export function refreshToken(state) {
	if (state.refresh) {
		return state.refresh.token
	}
}

export function isRefreshTokenExpired(state) {
	if (state.refresh && state.refresh.exp) {
		return 1000 * state.refresh.exp - new Date().getTime() < 5000
	}
	return true
}

export function isAuthenticated(state) {
	return !isRefreshTokenExpired(state)
}

export function errors(state) {
	return state.errors
}

export function getSuccessMsg(state) {
	return state.successMsg
}

export function getUser(state) {
	return state.user
}
