import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
function UserProfile() {
  return (
    <>
    <NavLink to='articles' className='fs-3 text-dark nav-link '>Articles</NavLink>
    <Outlet/>
    </>
  )
}

export default UserProfile