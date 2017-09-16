import React, { Component } from 'react'
import logo from '../img/logo.svg'
import strings  from '../lang.js'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/tracklist">
        <img src={logo} className="header__logo" alt="logo" />
        <h2 className="header__title">{ strings.title }</h2>
        </Link>
      </div>
     )
  }
}

export default Header
