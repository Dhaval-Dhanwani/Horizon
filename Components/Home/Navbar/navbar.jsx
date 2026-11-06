import React from "react";
import './navbar.css'
import 'D:/Horizon/Horizon/Components/Home/Navbar/navbar.css'
import { Link } from "react-router-dom";
import { AboutUs } from "../AboutUs/AboutUs";
export function Navbar()
{
    return (
        <>
                <div className="navbar">

                    
                    <Link className="navhorizon" to="/Home"> Horizon</Link>  
                    

                    <div className="contactDetails">
                        <Link to="/AboutUs" >AboutUs</Link>
                        <Link to="/SignUp">SignUp</Link>
                    </div>
                </div>

        </>
    )   
}