import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { localeReducer } from 'react-redux-localization'
import auth, * as fromAuth from './auth'
import app from './app'
import shops, * as fromSkills from './shops'
import users, * as fromUsers from './users'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
	auth: auth,
	app: app,
  shops: shops,
	users: users,
	locale: localeReducer,
	router: routerReducer,
  form:formReducer
})

export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth)
export const accessToken = state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken = state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth)
export const getUser = state => fromAuth.getUser(state.auth)
export const authErrors = state => fromAuth.errors(state.auth)
export const getSuccessMsg = state => fromAuth.getSuccessMsg(state.auth)
export const getUserInfo = state => fromUsers.getUserInfo(state.users)
export const cropperAvatar = state => fromUsers.cropperAvatar(state.users)
export const userErrors = state => fromUsers.errors(state.users)
export const getLanguageCode = state => state.locale

export function withAuth(headers = { 'Content-Type': 'application/json' }) {
	return state => ({
		...headers,
		Authorization: `Bearer ${accessToken(state)}`,
		'Accept-Language': getLanguageCode(state)
	})
}

export function withLanguage(headers = { 'Content-Type': 'application/json' }) {
	return state => ({
		...headers,
		'Accept-Language': getLanguageCode(state) ? getLanguageCode(state): 'en'
	})
}
