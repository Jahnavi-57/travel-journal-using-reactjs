import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function TravelCard(props)
{
       return(
        <section className="card">
            <div className="card--image--box">
                <img src={props.image} className="card--image" alt="Image"/>
            </div>
            <div className="card--infos">
                <div className="cont1">
                <FontAwesomeIcon className="card--icon"icon={faLocationDot}/>
                <h4 className="card--location">{props.location}</h4>
                <a href={props.link}>View on google maps</a>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <h4 className="card--date">{props.date}</h4>
                <p className="card--desc">{props.desc}</p>
            </div>
        </section>
       )
}