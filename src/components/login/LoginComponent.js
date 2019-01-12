import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Icon from '../Icons'
import Slider from 'react-slick'
import {Field, reduxForm} from 'redux-form'
import {customInput, responseError} from '../../fields'
import SocialButton from '../SocialButton'
import configs from '../../configs'
import {
  required,
  minLength
} from '../../validation'


class LoginComponent extends Component {

  handleSocialLogin = (user) => {
    console.log(user)
  };

  handleSocialLoginFailure = (err) => {
    console.error(err)
  };

  render() {

    const {handleSubmit, invalid, error} = this.props;
    const settings = {
      speed: 500,
      autoplay: true
    };
    console.log(configs.api.fb_api_id)
    return (
      <section>

        <div className="login-form-screen">
          <div className="container-fluid">
            <div className="row mh-100vh">
              <div className="col-md-6">
                <div className="formLeftCol">
                  <div className="formCol formStyle d-flex flex-column justify-content-between h-100">
                    <div className="logo">
                      <Link to="/"><img src="/images/lvh_cropped.png"/></Link>
                    </div>
                    <div>
                      <h2>SIGN IN</h2>
                      <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <div className="fldCol leftIconFld">
                      <span className="fldIcon fldIconL">
                          <Icon name="mdiAccount"/>
                      </span>
                            <Field
                              name="login"
                              component={customInput}
                              type="text"
                              placeholder="Username"
                              validate={[required]}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="fldCol leftIconFld rightIconFld">
                            <span className="fldIcon fldIconL">
                              <Icon name="mdiOnepassword"/>
                            </span>
                            <span className="fldIcon fldIconR cPointer" onClick={this.props.showPassword}>
                              <Icon name={this.props.state.password_type ? 'mdiEye' : 'mdiEyeOff'}/>
                            </span>
                            <Field
                              name="password"
                              component={customInput}
                              type={this.props.state.password_type ? 'text' : 'password'}
                              placeholder="Password"
                              validate={[required, minLength]}
                            />
                          </div>

                          <Field
                            name="responseError"
                            component={responseError}
                            error={error}
                          />


                        </div>
                        <button type="submit" className="btn lgBtn btn-primary roundBtn btn-block"
                                disabled={invalid}
                        >SIGN IN
                        </button>
                      </form>
                      <div className="formBtmCol">
                        <Link to="/forgot-password/" className="themeColor">Forgot Password?</Link>
                        <div className="forCandidate">
                          <p className="lgText pt-3">Or Connect via</p>
                          <div className="signUpBtns">
                            <div className="form-row">
                              <div className="col-md-6">
                                <SocialButton
                                  provider='google'
                                  className="btn roundBtn btn-block socialBtn gmailBtn mb-3"
                                  appId={configs.api.gg_api_id}
                                  onLoginSuccess={this.handleSocialLogin}
                                  onLoginFailure={this.handleSocialLoginFailure}
                                  key={'google'}
                                >
                                  <Icon name="mdiGmail" color="#ffff"/> <span>Gmail</span>
                                </SocialButton>
                              </div>
                              <div className="col-md-6">

                                <SocialButton
                                  provider='facebook'
                                  appId={configs.api.fb_api_id}
                                  className="btn roundBtn btn-block socialBtn btnFb mb-3"
                                  onLoginSuccess={this.handleSocialLogin}
                                  onLoginFailure={this.handleSocialLoginFailure}
                                >
                                  <Icon name="mdiFacebook" color="#ffff"/> <span>Facebook</span>
                                </SocialButton>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="btmLine">Don’t have an account?<a href="#">SIGN UP</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightSliderCol d-none d-md-block">
            <Slider {...settings}>
              <div>
                <img className="rightSlideImg" src="/images/slider-one.jpg" alt="first slide"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>OUR GREATEST LONG-TERM <br/> INVESTMENT IS OUR PEOPLE</h5>
                </div>
              </div>
              <div>
                <img className="rightSlideImg" src="/images/slider-one.jpg" alt="first slide"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>OUR GREATEST LONG-TERM <br/> INVESTMENT IS OUR PEOPLE</h5>
                </div>
              </div>
              <div>
                <img className="rightSlideImg" src="/images/slider-one.jpg" alt="first slide"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>OUR GREATEST LONG-TERM <br/> INVESTMENT IS OUR PEOPLE</h5>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    )
  }
}

LoginComponent = reduxForm({
  form: 'login',
})(LoginComponent);

export default LoginComponent
