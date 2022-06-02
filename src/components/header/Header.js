import React from 'react'
import {Nav,Navbar,Container,NavDropdown,} from 'react-bootstrap'
import {Route,Routes} from "react-router-dom"
import Home from '../Home';
import Signup from '../Signup';
import Contactus from '../Contactus';
import Login from '../Login';
import Profile from '../user-profile/Profile';
import Products from '../view-products/Products'; 
import Cart from '../cart/Cart';
import Classix from '../class-ix/Classix';
import ClassX from '../class-x/ClassX';
import Userdashboard from '../userdashboard/Userdashboard'
import {NavLink,useNavigate,Navigate} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { logoutuser } from '../../slices/userSlice';
function Header() {
  let {userobj,iserror,isloading,success,errmsg}=useSelector(state=>state.user)
  let navigate=useNavigate()
  let dispatch=useDispatch()
  const userlogout=()=>{
      localStorage.clear();
      dispatch(logoutuser());
      navigate("/login");
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" className='pl-3'>E-commerce</Navbar.Brand>
          <label className='text-white ml-2' >Search : </label>
          <input type="text" placeholder='search user here' className='w-50'/>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {success!==true?(
              <>
              <NavLink className="nav-link pr-5" to={'/'} >Home</NavLink>
              <NavLink className="nav-link pr-5" to={'/signup'} >Signup</NavLink>
              <NavLink className="nav-link pr-5" to={'/login'} >Login</NavLink>
              <NavLink className="nav-link pr-5" to={'/contactus'} >Contactus</NavLink>
              </>):(
              <>
              <NavDropdown title={userobj.username} id="collasible-nav-dropdown">
                <NavDropdown.Item >change password</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={userlogout} >LogOut</NavDropdown.Item>
              </NavDropdown>
              </>
              )
              } 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
               

      <Routes>
        <Route path='/login' element={<Login/>}  />

        <Route path='/' element={<Home/>}  />

        <Route path='/signup' element={<Signup/>}  />

        <Route path='/contactus' element={<Contactus/>}  />

        <Route path='/class-ix' element={<Classix/>} />

        <Route path='/class-x' element={<ClassX/>} />

        <Route path='/userdashboard'element={<Userdashboard/>} >
              <Route path='profile' element={<Profile/>} />
              <Route path='products' element={<Products/>} />
              <Route path='cart' element={<Cart/>} />
              <Route path='' element={<Navigate to={'profile'}  />} />

        </Route>      
      </Routes>

    </div>
  )
}

export default Header
