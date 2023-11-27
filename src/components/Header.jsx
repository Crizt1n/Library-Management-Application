import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
   <Link to={'/'}>
      <div className="header_out bg-dark">
      <h1 className='p-2 m-2 text-light'> <span className='container text-success'>Library</span>Management System</h1>
      </div>
   </Link>
  )
}

export default Header