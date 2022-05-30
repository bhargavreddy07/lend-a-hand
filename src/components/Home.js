import React from 'react'
import homeimg from '../images/home.svg'
function Home() {
  return (
    <div className='container'>
      <h1 className="text-center text-primary">Home</h1>
      <img src={homeimg} 
        width="500px"
        className='d-sm-block d-none mx-auto'
         />
      <p className="text-secondary lead w-75 mx-auto m-b">Lorem ipsum, dolor sit amet 
      consectetur adipisicing elit. Fugit tempora necessitatibus
       dolore aliquam error nemo accusantium veritatis explicabo 
       saepe officia, minus perspiciatis quaerat libero accusamus
        esse, quia fuga! Aspernatur ipsam vero, harum, fugit
         exercitationem sapiente quis recusandae similique, placeat 
         velit fugiat! Excepturi impedit dolorem, reiciendis ullam
          repellendus quod, libero eveniet at voluptatem ipsum iure modi?
           Deserunt rerum alias corporis labore optio eveniet doloribus odit,
            illum repellendus veritatis, odio quidem commodi laudantium quam 
            ipsa delectus. Magni iste minus possimus sint laborum sunt 
            </p>
    </div>
  )
}

export default Home
