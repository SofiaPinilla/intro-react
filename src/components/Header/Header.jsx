// import React from 'react'
// const React = require('React')
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <span>Header</span>
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/user">UserForm</Link>
        </span>
        <span>
          <Link to="/counter">Counter</Link>
        </span>
      </div>
    </nav>
  )
}

export default Header