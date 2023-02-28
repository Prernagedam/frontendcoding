import React, { useContext } from 'react'
import Heading from '../../Heading/Heading'
import { sender } from '../../Store'
import './Home.css'

const Home = () => {
  let { mode } = useContext(sender)
  return (
    <>
      <div className={`container-fluid bg-${mode ? "dark" : "light"} text-${mode ? "light" : "dark"} `} id='home'>
        <div className={`row p-4  bg-${mode ? "dark" : "light"} text-${mode ? "light" : "dark"}`} style={{ textAlign: 'center', fontFamily: 'serif' }}>
          <Heading name="Home" />
          <div className="col-lg-8" >
            <h1 className="fst-italic bg-warning text-primary-emphasis">Hello!</h1>
            <h2 className="fst-italic text-primary-emphasis bg-warning">MY SELF PRERNA GEDAM</h2>
            <p className="fst-italic bg-warning text-primary-emphasis ">“Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.”</p>
            <br /><br /><br />
            <h1 className="fst-italic  text-primary-emphasis " >"Love the life you live. Live the life you love"</h1>
          </div>
          <div className=" home col-lg-4 ">
            <img src="images/WhatsApp Image 2023-02-08 at 5.21.25 PM.jpeg " alt="" width="100%" class="img-thumbnail border border-5 border border-dark" />
          </div>

        </div>
      </div>

    </>
  )
}

export default Home