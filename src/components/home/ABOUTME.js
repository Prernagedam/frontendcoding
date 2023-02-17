import React from 'react'
import Heading from '../Heading'

const ABOUTME = () => {

  return (
    <>
      <div className="container-fluid home">
        <div className="row vh-100">
          <div className='text-dark' style={{ textAlign: 'center', fontFamily: 'serif' }}>
            <Heading name="Aboutme" />
          </div>
          <div className="col-5 ">
            <img src="images/WhatsApp Image 2023-02-08 at 5.21.25 PM.jpeg" alt="" width="50%" height="650px" class="img-thumbnail border border-5 border border-dark" />
          </div>
          <div className="col-7 text-dark">
            <p style={{ textAlign: 'center', fontFamily: 'serif' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum laboriosam quos adipisci reiciendis impedit aut animi veritatis? Modi quas libero dolorum voluptates, repellendus eligendi dolores corporis officia tempore. Atque, veritatis laudantium dolorum, repudiandae harum similique magni velit nesciunt laboriosam voluptate odio at! Incidunt adipisci officia commodi magni ratione nobis.</p>
            <br /><br />
            <h1 style={{ textAlign: 'center', fontFamily: 'serif' }}>FRONT-END DEVELOPER</h1>

            <p style={{ textAlign: 'center', fontFamily: 'serif' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloremque.</p>
            <br /><br /><br /><br /><br />
            <div className="row ">
              <div className="col-4">
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>Birthday:</strong>
                    <span className='text-dark'>21/september/ 1995</span>
                  </li>
                  <br />
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>Phone:</strong>
                    <span>7028612348</span>
                  </li>
                  <br />
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>City:</strong>
                    <span>Nagpur/Maharashtra</span>
                  </li>
                </ul>
              </div>
              <div className="col-5">
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>Age:</strong>
                    <span>27yr</span>
                  </li>
                  <br />
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>Degree:</strong>
                    <span>B.E In Computer Sci</span>
                  </li>
                  <br />
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>Email:</strong>
                    <span>prernagedam0721@gmail.com</span>
                  </li>
                </ul>
              </div>
              <br /><br /><br /><br />
            </div>
            <br /><br/>
            <p className='text-dark' style={{ fontFamily: 'serif' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error corporis, ipsam excepturi quidem necessitatibus delectus quod! Aliquid, totam odit? Illum?</p>

          </div>
        </div>
      </div>
       

    </>
  )
}


export default ABOUTME