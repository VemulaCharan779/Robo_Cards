import React from "react";
import "./Card.css";    
 import { Link } from "react-router-dom";

const Card = (props, {item}) => {   
    return (
        <div className="card-container">
            <div className="card">
                <img src={`https://robohash.org/${props.name}`} alt={`Robot ${props.name}`} />
                <h3 className="name">{props.name}</h3>
                <h6>{props.email}</h6>
                <Link to={`/item/`+props.name + '/' + props.email}>Click</Link>
            </div>
        </div>
    )
}  

export default Card;
