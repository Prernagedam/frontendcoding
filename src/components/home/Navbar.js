import React, { useState } from 'react'
import { CgSun } from "react-icons/cg";
import { BsFillMoonStarsFill} from "react-icons/bs";
import Links from './Links';
import { sender } from '../../Store';



const Navbar = () => {
    let[mode,setMode]=useState(sender)
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${mode ? "dark" :"light"}`}>
                <div className="container-fluid">
                    <a className="navbar-brand  text-decoration-wavy"  style={{ color: mode ? "white" : "black" }} href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <Links name="Home"/>
                            <Links name="About"/>
                            <Links name="Skills"/>
                            <Links name="Contact"/>
                        </ul>
                        <div className="d-flex" role="search">
                        <button onClick={() => setMode(!mode)}>{mode ? < CgSun /> : <BsFillMoonStarsFill/>}</button>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar