import React from "react";
import "../styles/Testimony.css"

//All components start with Upper case letter
function Testimony(props){
  return(
    <div className="testimony-container">
      <img
        className="testimony-image"
        src={require(`../images/testimony-${props.image}.png`)}
        alt="Emma Photo"
      />


      <div className="testimony-text-container">
        <p className="testimony-name"><strong>{props.name}</strong> en {props.country}</p>
        <p className="testimony-role">{props.role} en <strong>{props.company}</strong></p>
        <p className="testimony-text">"{props.testimony}"</p>
      </div>

    </div>
  );
}

export default Testimony;