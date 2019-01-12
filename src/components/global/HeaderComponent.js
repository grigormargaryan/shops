import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class HeaderComponent extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse position-relative ml-5" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0 w-50">
            <input className="form-control w-100" type="search" placeholder="Search" />
          </form>
          <ul className="navbar-nav position-absolute r-0">
            {this.props.isAuthenticated ? (
              <li className="nav-item" onClick={this.props.logout}>
                <Link className="nav-link disabled" to="#">
                  Logout
                </Link>
              </li>
            ) : (
              <div className="d-inline-flex">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="/sign-up">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    )
  }
}

export default HeaderComponent
