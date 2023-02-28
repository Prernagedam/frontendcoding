import React, { useContext } from 'react'
import Heading from '../Heading/Heading'
import { SiCsswizardry, SiHtml5, SiBootstrap, SiJavascript, SiReact } from "react-icons/si";
import { sender } from '../Store';


const Skills = () => {
  let { mode } = useContext(sender)

  let skills = [
    {
      id: 1,
      icon: <SiHtml5 />,
      name: 'HTML',
      column: "col-sm-6 col-md-3",
      colour: "primary"
    },
    {
      id: 2,
      icon: <SiCsswizardry />,
      name: 'CSS',
      column: "col-sm-6 col-md-3",
      colour: "danger"
    },
    {
      id: 3,
      icon: <SiBootstrap />,
      name: 'Bootstrap',
      column: "col-sm-6 col-md-3",
      colour: "info"
    },
    {
      id: 4,
      icon: <SiJavascript />,
      name: 'Javascript',
      column: "col-sm-6 col-md-5",
      colour: "warning"
    },
    {
      id: 5,
      icon: <SiReact />,
      name: 'Reactjs',
      column: "col-sm-6 col-md-5",
      colour: "primary"
    },
  ]

  return (
    <>
      <div className={` py-3 container-fluid  bg-${mode ? "dark" : "light"} text-${mode ? "dark" : "light"}`} id='skills'>
        <Heading name="Skills" />
        <div className='row skills align-items-center justify-content-evenly'>
          <br />
          <p className="fst-italic text-primary-emphasis" style={{ textAlign: 'center' }}>I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user.  Delivering work within time and budget which meets client's requirements is my moto</p>
          {
            skills.map((e) => {
              return (
                <div key={e.id} data-aos="zoom-in-down" className={`${e.column} shadow py-3 text-center rounded `}>
                  <div className={`text-${e.colour}`} style={{ fontSize: '85px' }}>{e.icon}</div>
                  <h4>{e.name}</h4>
                </div>
              )
            })
          }
        </div>
      </div>


    </>
  )
}

export default Skills