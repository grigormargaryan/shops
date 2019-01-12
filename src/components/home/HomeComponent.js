import React, {Component} from 'react'
import {localize} from 'react-redux-localization'
import translations from '../../translations/home.json'
import Icon from '../Icons'
import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';


class HomeComponent extends Component {
  openPopupbox() {
    const content = (
      <div>
        <p className="quotes">Work like you don't need the money.</p>
        <p className="quotes">Dance like no one is watching.</p>
        <p className="quotes">And love like you've never been hurt.</p>
        <span className="quotes-from">― Mark Twain</span>
      </div>
    )
    PopupboxManager.open({ content })
  }

  render() {

    const popupboxConfig = {
      titleBar: {
        enable: true,
        text: 'Popupbox Demo'
      },
      fadeIn: true,
      fadeInSpeed: 500
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="thumbnail position-relative">
              <a href="/w3images/lights.jpg" target="_blank" className="imag-href">
                <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Lights" className="img-thumbnail"/>
              </a>
              <a href="#" className="info-ic" onClick={this.openPopupbox}>
                <Icon name="mdiInformation"/>
              </a>
              <PopupboxContainer { ...popupboxConfig } />
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail position-relative">
              <a href="/w3images/nature.jpg" target="_blank" className="imag-href">
                <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Nature" className="img-thumbnail"/>
              </a>
              <a href="#" className="info-ic">
                <Icon name="mdiInformation"/>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
              <a href="/w3images/fjords.jpg" target="_blank">
                <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Fjords" className="img-thumbnail"/>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
              <a href="/w3images/fjords.jpg" target="_blank">
                <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Fjords" className="img-thumbnail"/>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
              <a href="/w3images/fjords.jpg" target="_blank">
                <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Fjords" className="img-thumbnail"/>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
              <a href="/w3images/fjords.jpg" target="_blank">
                <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Fjords" className="img-thumbnail"/>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
              <a href="/w3images/fjords.jpg" target="_blank">
                <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Fjords" className="img-thumbnail"/>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
              <a href="/w3images/fjords.jpg" target="_blank">
                <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Fjords" className="img-thumbnail"/>
              </a>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default localize(translations)(HomeComponent)
