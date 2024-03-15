import React from "react";
import "./Card.css";    

import { useParams } from "react-router-dom";

const SingleCard = () => {
    const {name, email, id} = useParams();
    return(
        <div className="singleCard">
             <img src={`https://robohash.org/${name}`} alt={`Robot ${name}`} />
               <div className="singleCard-details">
                     <h1 className="name">{name}</h1>
                     <h3>{email}</h3>
                     <h3>{id}</h3>
               </div>
        </div>
    )
}

export default SingleCard;