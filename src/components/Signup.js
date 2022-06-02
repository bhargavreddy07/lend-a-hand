import React from 'react'
import {FormControl,InputGroup} from 'react-bootstrap'
import { FaSignInAlt } from "react-icons/fa";
import {Form,Button,Dropdown} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import singinimg from '../images/signin.svg';

import { useState } from "react";


import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";


function Signup() {

    
    const {register,handleSubmit,formState:{errors}}=useForm()
    const navigate=useNavigate()
    

    // Input Password Component




    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });
      
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };



    const onsubmit=(userobj)=>{
        console.log(userobj)
        axios.post("http://localhost:4000/user-api/create-user",userobj)
        .then(response=>{
            console.log(response)
            alert(response.data.message)
            if(response.data.message=="user created sucessfully")
            {
                navigate("/login")
            }
        })
        .catch(err=>{
            console.log(err)
            alert("something went wrong in creating user")
        })
    }
  return (
    <div>
    <h1 className="text-center text-primary">Signup</h1>

    <img src={singinimg} 
        width="250px" 
        className='d-sm-block d-none mx-auto'
        />


    <Form className='w-50 mx-auto' onSubmit={handleSubmit(onsubmit)} >



        <Form.Group className="mb-3" controlId="formBasicFirstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="enter first name " {...register("firstname",{required:true})}  />
            {errors.firstname && <p className="text-danger">*firstname is required</p> }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="enter last name " {...register("lastname",{required:true})}  />
            {errors.lastname && <p className="text-danger">*lastname is required</p> }
        </Form.Group>


   
        <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="enter user name " {...register("username",{required:true})}  />
            {errors.username && <p className="text-danger">*username is required</p> }
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email " {...register("email",{required:true})}  />
            {errors.email && <p className="text-danger">*email is required</p> }
        </Form.Group>




        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="enter password " {...register("password",{required:true})} />
            {errors.password && <p className="text-danger">*password is required</p> }
        </Form.Group> */}


        <div className='mb-3'>
        <InputLabel htmlFor="standard-adornment-password" className="form-lable color-black mb-2">
        Password
      </InputLabel>
      <Input className="form-control" {...register("password",{required:true})}
        type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }     
       />
        {errors.password && <p className="text-danger">*password is required</p>}
       
        </div>
        


        <Form.Label>Select classes</Form.Label>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="nine" id="nine" {...register("nine",{required:true})}/>
        <label class="form-check-label" for="nine">
        IX
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="ten" id="ten" {...register("ten")}/>
        <label class="form-check-label" for="ten">
            X
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="eleven" id="eleven" {...register("eleven")}/>
        <label class="form-check-label" for="eleven">
            XI
        </label>
        </div>
        <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" value="twelve" id="twelve" {...register("twelve")}/>
        <label class="form-check-label" for="twelve">
            XII
        </label>
        {errors.nine && <p className="text-danger">*pls select the class</p>}
        </div>
        
        <div>
        <Form.Label>Select subjects</Form.Label>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="maths" id="maths" {...register("maths",{required:true})}/>
        <label class="form-check-label" for="maths">
        Maths
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="english" id="english" {...register("english")}/>
        <label class="form-check-label" for="english">
            English
        </label>
        </div>
        <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" value="Physics" id="Physics" {...register("Physics")}/>
        <label class="form-check-label" for="Physics">
            Physics
        </label>
        </div>
        </div>
        {errors.maths && <p className="text-danger">*pls select the subject</p>}
      
        <Button variant="primary" type="submit">
            sign in <FaSignInAlt/>
        </Button>
    </Form>
    </div>
  )
}


export default Signup
