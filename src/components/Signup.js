import React from 'react'
import { FaSignInAlt } from "react-icons/fa";
import {Form,Button,Dropdown} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import singinimg from '../images/signin.svg';
import { useState } from "react";
function Signup() {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const navigate=useNavigate()
    
    const onsubmit=(userobj)=>{
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

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email " {...register("email",{required:true})}  />
            {errors.email && <p className="text-danger">*email is required</p> }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="enter city"{...register("city",{required:true})} />
            {errors.city && <p className="text-danger">*city is required</p> }
        </Form.Group>
        <div className="mb-3">
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic" >
    subject
  </Dropdown.Toggle>

  <Dropdown.Menu  {...register("subject")}>
    <Dropdown.Item href="#/action-1" >english</Dropdown.Item>
    <Dropdown.Item href="#/action-2" >maths</Dropdown.Item>
    <Dropdown.Item href="#/action-3" >physics</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
{errors.subject && <p className="text-danger">*select subject</p> }
        </div>
        <Button variant="primary" type="submit">
            signIn <FaSignInAlt/>
        </Button>
    </Form>
    </div>
  )
}

export default Signup
