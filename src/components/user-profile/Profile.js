import React from 'react'
import {Button,Card} from 'react-bootstrap'
import profileimg1 from '../../images/profileimg1.svg'
import {useNavigate} from 'react-router-dom'
function Profile() {
  let navigate=useNavigate()
  return (
    <div className='container'>
      <div className="text-center mb-8"><h1>Class Details</h1></div>
      <div className="row">
        <div className="col-6 d-flex justify-content-center">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profileimg1}/>
    <Card.Body>
      <Card.Title>Profile</Card.Title>
      <Card.Text>
       <p className="text-secondary">
         upcomming class ix details
       </p>
      </Card.Text>
     <Button variant="primary" onClick={()=>{navigate('/class-ix')}} >upcomming classes</Button>
    </Card.Body>
</Card>
        </div>
        <div className="col-6 d-flex justify-content-center">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profileimg1}/>
    <Card.Body>
      <Card.Title>Profile</Card.Title>
      <Card.Text>
       <p className="text-secondary">
         upcomming class x details
       </p>
      </Card.Text>
     <Button variant="primary" onClick={()=>{navigate('/class-x')}} >upcomming classes</Button>
    </Card.Body>
</Card>
        </div>
      </div>
    </div>
  )
}

export default Profile
