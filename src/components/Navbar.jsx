import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to='/register'>Register </Link>
      <Link to='/login'>Login </Link>
      <Link to='/dashboard'>Dashboard </Link>
    </div>
  )
}

export default Navbar
