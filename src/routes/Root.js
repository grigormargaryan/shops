import React from 'react'
import {Route, Switch} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'
import FooterComponent from '../components/global/FooterComponent'
import requireAuth from '../utils/requireAuth'
import {
  App,
  LoginContainer,
  RecruiterLoginContainer,
  RegistrationContainer,
  CreateShopsContainer,
  ForgotContainer,
  ResetContainer,
  HomeContainer,
  HeaderContainer,
  ProfileContainer,
  NotFoundPageContainer
} from '../containers'

const Root = ({store, history}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App/>
        <Switch>
          <Route path="/login/" component={LoginContainer} exact/>
          <Route path="/recruiter/login/" component={RecruiterLoginContainer} exact/>
          <Route path="/sign-up/" component={RegistrationContainer} exact/>
          <Route path="/shops-data/:token/" component={CreateShopsContainer} exact/>
          <Route path="/forgot-password/" component={ForgotContainer} exact/>
          <Route path="/forgot-password/:token/" component={ResetContainer} exact/>
          <Route component={DefaultContainer}/>
          <Route component={NotFoundPageContainer} exact/>
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
)
const DefaultContainer = () => (
  <React.Fragment>
    <HeaderContainer/>
    <div className="container-fluid containerFluid">
      <Route exact path="/" component={HomeContainer}/>
      <Route path="/users/profile/" component={requireAuth(ProfileContainer)} exact/>
    </div>
    <FooterComponent/>
  </React.Fragment>
)

export default Root
