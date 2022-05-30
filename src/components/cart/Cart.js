import React from 'react'
import axios from 'axios'
function Cart() {
  let token=localStorage.getItem("token")
  const getusers=async()=>{
    let response=await axios.get("/user-api/getusers",{
      headers:{ Authorization: "Bearer "+ token}
    })
    let message=response.data.message
    alert(message)
  }
  return (
    <div>
      <h1 className="text-secondary text-center">Cart</h1>
      <button className="btn btn-danger d-block mx-auto mt-5" onClick={getusers} >
        Get Users
      </button>
    </div>
  )
}

export default Cart
