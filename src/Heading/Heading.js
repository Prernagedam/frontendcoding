import React, { useContext } from 'react'
import { sender } from '../Store'

const Heading = (props) => {
  let{mode}=useContext(sender)
  return (
    <>
    <div className="container-fluid lg p-5">
      
    <h1 className={` text-${mode?"light":"dark"}`}style={{ textAlign: 'center', fontFamily: 'serif' }}>{props.name}</h1>

    </div>
    </>
  )
}

export default Heading