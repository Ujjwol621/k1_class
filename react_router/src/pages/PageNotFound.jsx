import React from 'react'
import './PageNotFound.css'
import { NavLink } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='pageNotFound'>
        <div className='text'>
            <h1>404 | Page Not Found</h1>
            <NavLink to='/' className='home-link'>Go Back Home</NavLink>
        </div>
    </div>
  )
}

export default PageNotFound