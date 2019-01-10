import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'devicon/devicon.min.css'
import 'react-notifications/lib/notifications.css'
import 'cropperjs/dist/cropper.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/style.css'
import './styles/custom.css'

import configureStore from './store'
import Root from './routes/Root'

require('dotenv').config()

async function init() {
	const history = createHistory()

	const store = await configureStore(history)

	ReactDOM.render(<Root store={store} history={history} />, document.getElementById('root'))
}

init()
