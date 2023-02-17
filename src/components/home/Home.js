import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import Heading from '../Heading'

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row home vh-100">
          <div className="col position-relative fixed-top text-dark"style={{ textAlign: 'center', fontFamily: 'serif' }}>
            <Navbar/>
            <Heading name="Home"/>
            <p className="position-absolute bottam-50 end-50 text-dark">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, harum optio modi incidunt, qui provident voluptatem eos illum nam nulla suscipit praesentium laudantium minus aliquid dicta est animi inventore deleniti!</p>
           </div>

        </div>
      </div>

    </>
  )
}

export default Home