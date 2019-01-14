import { RSAA } from 'redux-api-middleware'
import { withLanguage } from '../reducers/index'

export const SKILLS_REQUEST = 'SKILLS_REQUEST'
export const SKILLS_SUCCESS = 'SKILLS_SUCCESS'
export const SKILLS_FAILURE = 'SKILLS_FAILURE'

export const CREATE_SHOPS_REQUEST = 'CREATE_SHOPS_REQUEST'
export const CREATE_SHOPS_SUCCESS = 'CREATE_SHOPS_SUCCESS'
export const CREATE_SHOPS_FAILURE = 'CREATE_SHOPS_FAILURE'

export const getFavoriteSkills = () => ({
	// TODO limit should be a variable and the default value can be 6
	[RSAA]: {
		endpoint: '/skills/?limit=6',
		method: 'GET',
		headers: withLanguage(),
		types: [SKILLS_REQUEST, SKILLS_SUCCESS, SKILLS_FAILURE]
	}
})


export const createShop = (shop_data) => ({
  [RSAA]: {
    endpoint: '/users/create-shop/',
    method: 'POST',
    body: JSON.stringify({ shop_data }),
    headers: withLanguage(),
    types: [CREATE_SHOPS_REQUEST, CREATE_SHOPS_SUCCESS, CREATE_SHOPS_FAILURE]
  }
})
