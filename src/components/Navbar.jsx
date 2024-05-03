import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
export default function Navbar()
{
    return(
        <nav className="nav">
            <FontAwesomeIcon  className="nav--logo" icon={faPlaneDeparture} />
            <h2 className="nav--title">My Travel Journal</h2>
        </nav>
        
    )
}