import React, { useContext, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Aboutme.css'
import { sender } from '../Store';
import Heading from '../Heading/Heading';

const Aboutme = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  let { mode } = useContext(sender)
  let info = [
    {
      id: 1,
      title: "Name",
      data: "PRERNA R. GEDAM"
    },
    {
      id: 2,
      title: "DOB",
      data: "21 September"
    },
    {
      id: 3,
      title: "Email",
      data: "prernagedam0721@gmail.com"
    },
    {
      id: 4,
      title: "Phone",
      data: "+91-7028612348"
    },
    {
      id: 5,
      title: "Address",
      data: "Plot No-37,Adiwasi Society,Godhani Road,Nagpur,Pin-Code-440030"
    }
  ]


  return (
    <>
      <div className={`container-fluid bg-${mode ? "dark" : "light"} text-${mode ? "light" : "dark"}`} id='aboutme'>
        <div className=" p-5 row">
          <Heading name="Aboutme" />
          <h1 style={{ textAlign: 'center', fontFamily: 'serif' }} className="fst-italic text-primary-emphasis bg-warning">FRONT-END DEVELOPER</h1>

          <p style={{ textAlign: 'center', fontFamily: 'serif' }} className="fst-italic text-primary-emphasis bg-warning"> "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."</p>
          <div className="aboutme col-lg-4 ">
            <img data-aos="flip-left" src="images/WhatsApp Image 2023-02-01 at 9.11.03 PM.jpeg" alt="" width="100%"  class="img-thumbnail border border-5 border border-dark" />
          </div>
          <div className="col-lg-8 " data-aos="flip-left">
            <table className={`table text-${mode ? 'light' : 'dark'}`}>
              {
                info.map((e) => {
                  return (
                    <tbody key={e.id}>
                      <tr>
                        <th>{e.title}</th>
                        <td>{e.data}</td>
                      </tr>
                    </tbody>
                  )
                })
              }
            </table>
            <br /><br />
            <button className='bg-warning text-dark'><a  className={`text-${mode ? 'light' : 'dark'} text-dark`} href="Resume/prerna Gedam.pdf" download>Download CV</a></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutme