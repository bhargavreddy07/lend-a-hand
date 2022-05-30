import React from 'react';
import './Userdashboard.css';
import {NavLink,Outlet} from 'react-router-dom';
function Userdashboard() {
  return (
    <div>
      <nav className="nav nav-pills nav-fill">
        <NavLink className="nav-item nav-link" to={'profile'} >Profile</NavLink>
        <NavLink className="nav-item nav-link" to={'products'} >Products</NavLink>
        <NavLink className="nav-item nav-link" to={'cart'} >Cart<i class="fa fa-cart-plus" aria-hidden="true"></i></NavLink>
      </nav>

      <Outlet/>
    </div>
  )
}

export default Userdashboard
