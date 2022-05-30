import {useDispatch,useSelector} from 'react-redux'
import {Form,Button} from 'react-bootstrap'
import { FaSignInAlt } from "react-icons/fa";
import {useForm} from 'react-hook-form';
import { userlogin } from '../slices/userSlice';
import loginimg from '../images/login.svg';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react'

function Login() {
    const {register,handleSubmit,formState:{errors}}=useForm()
    
    let dispatch=useDispatch()
    let navigate=useNavigate()
    let {userobj,iserror,isloading, success,errmsg}=useSelector(state=>state.user)
    
    const onsubmit=(userobj)=>{
        dispatch(userlogin(userobj))
    }
    
    useEffect(()=>{
      if(success){
        navigate('/userdashboard')
      }
      if(iserror)
      {
        alert(errmsg)
      }
    },[success,iserror])


  return (
    <div className='container'>
      <p className="display-2 text-center text-primary">Login</p>

        <img
        src={loginimg}
        width="300px"
        className="d-sm-block d-none mx-auto"
         alt=""
        />
      <Form className='w-50 mx-auto' onSubmit={handleSubmit(onsubmit)} >

        <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="enter username " {...register("username",{required:true})}  />
            {errors.username && <p className="text-danger">*username is required</p> }
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="enter password " {...register("password",{required:true})} />
            {errors.password && <p className="text-danger">*password is required</p> }
        </Form.Group>

        <Button variant="primary" type="submit">
            LogIn <FaSignInAlt/>
        </Button>
    </Form>
    </div>
  )
}

export default Login
