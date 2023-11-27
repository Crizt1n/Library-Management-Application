import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
   <Link to={'/'}>
      <div className="header_out bg-dark p-3">
      <h2 className='  text-light'> <span className='text-success'>Library </span>Management System</h2>
      </div>
   </Link>
  )
}

export default Header