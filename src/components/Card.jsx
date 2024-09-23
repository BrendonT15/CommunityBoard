import React from "react";

const Card = (props) => {
    return(
        <div className="Card">
            <h2 className="name">{props.name}</h2>
            <img src={props.image} alt={props.name + " image"}/>
            <button>Visit Website</button>
        </div>
    );
};

export default Card;