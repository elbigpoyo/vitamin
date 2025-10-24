import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='topnav'>
        <div>
          <Link className="main-link" to='/'>My Website</Link>
        </div>
        <div>
          <Link className="nav-link" to='/home'>Home</Link>
          <Link className="nav-link" to='/nothome'>NotHome</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
