import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Icon from '../Icons'
import Slider from 'react-slick'
import {Field, reduxForm} from 'redux-form'
import {customInput} from '../../fields'
import {
  required,
  minLength,
  maxLength,
  email
} from '../../validation';

class RecruiterLoginComponent extends Component {
  render() {
    const {handleSubmit} = this.props;
    const settings = {
      speed: 500,
      autoplay: true
    };
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
                         <Icon name="mdiEmail"/>
                      </span>
                            <Field
                              name="email"
                              component={customInput}
                              type="text"
                              placeholder="Email"
                              validate={[email,required]}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="fldCol leftIconFld rightIconFld">
                      <span className="fldIcon fldIconL">
                        <Icon name="mdiOnepassword"/>
                      </span>
                            <span className="fldIcon fldIconR cPointer" onClick={this.props.showPassword}>
                        <Icon name= {this.props.state.password_type ? 'mdiEye' : 'mdiEyeOff'}/>
                      </span>
                            <Field
                              name="password"
                              component={customInput}
                              type={this.props.state.password_type ? 'text' : 'password'}
                              placeholder="Password"
                              validate={[required,minLength,maxLength]}
                            />
                          </div>
                        </div>
                        <button type="submit" className="btn lgBtn btn-primary roundBtn btn-block">SIGN IN</button>
                      </form>
                      <div className="formBtmCol">
                        <Link to="/forgot-password/" className="themeColor">Forgot Password?</Link>
                      </div>
                    </div>
                    <div>
                      <p className="btmLine">Don’t have an account? <a href="#">SIGN UP</a></p>
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
RecruiterLoginComponent = reduxForm({
  form: 'login',
})(RecruiterLoginComponent);

export default RecruiterLoginComponent
