import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Icon from '../Icons'
import Slider from 'react-slick'
import {Field, reduxForm} from 'redux-form'
import {customInput, TextAreaInput} from '../../fields'
import {
  required,
  minLength,
  maxLength,
  email
} from '../../validation'


class CreateShopsComponent extends Component {

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
            <div className="row">
              <div className="col-md-6">
                <div className="formLeftCol">
                  <div className="formCol formStyle d-flex flex-column justify-content-between h-100">
                    <div className="logo">
                      <Link to="/"><img src="/images/lvh_cropped.png"/></Link>
                    </div>
                    <div>
                      <h2>SHOPS</h2>
                      <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <div className="fldCol leftIconFld">
                      <span className="fldIcon fldIconL">
                         <Icon name="mdiShopify"/>
                      </span>
                            <Field
                              name="shop_name"
                              component={customInput}
                              type="text"
                              placeholder="Shop Name"
                              validate={[required, maxLength]}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="fldCol leftIconFld">
                      <span className="fldIcon fldIconL">
                         <Icon name="mdiOffice"/>
                      </span>
                            <Field
                              name="organization_name"
                              component={customInput}
                              type="text"
                              placeholder="Company Name"
                              validate={[required, maxLength]}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="fldCol leftIconFld">
                      <span className="fldIcon fldIconL">
                         <Icon name="mdiEmail"/>
                      </span>
                            <Field
                              name="contact_email"
                              component={customInput}
                              type="text"
                              placeholder="Contact Email"
                              validate={[email, required]}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="fldCol leftIconFld">
                      <span className="fldIcon fldIconL">
                         <Icon name="mdiOfficeBuilding"/>
                      </span>
                            <Field
                              name="country"
                              component={customInput}
                              type="text"
                              placeholder="Country"
                              validate={[required, maxLength]}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="fldCol leftIconFld">
                      <span className="fldIcon fldIconL">
                         <Icon name="mdiCity"/>
                      </span>
                            <Field
                              name="city"
                              component={customInput}
                              type="text"
                              placeholder="City"
                              validate={[required]}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="fldCol leftIconFld">
                      <span className="fldIcon fldIconL">
                         <Icon name="mdiRoad"/>
                      </span>
                            <Field
                              name="street"
                              component={customInput}
                              type="text"
                              placeholder="Street"
                              validate={[required]}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="fldCol leftIconFld">
                      <span className="fldIcon fldIconL">
                         <Icon name="mdiCellphoneIphone"/>
                      </span>
                            <Field
                              name="phone"
                              component={customInput}
                              type="text"
                              placeholder="Phone"
                              validate={[required]}
                            />
                          </div>
                        </div>
                        <div className="form-group text-ar">
                          <div className="fldCol leftIconFld">
                      <span className="fldIcon fldIconL">
                         <Icon name="mdiText"/>
                      </span>
                            <Field
                              name="description"
                              component={TextAreaInput}
                              type="text"
                              placeholder="Description"
                              validate={[required]}
                            />
                          </div>
                        </div>
                        <button type="submit" className="btn lgBtn btn-primary roundBtn btn-block">CREATE</button>
                      </form>
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

CreateShopsComponent = reduxForm({
  form: 'shops',
})(CreateShopsComponent)

export default CreateShopsComponent
