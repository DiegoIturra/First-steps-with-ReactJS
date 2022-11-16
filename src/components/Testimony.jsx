import React from "react";
import "../styles/Testimony.css"

//All components start with Upper case letter
function Testimony(){
  return(
    <div className="testimony-container">
      <img 
        className="testimony-image"
        src={require('../images/testimony-emma.png')}
        alt="Emma Photo"
      />

      <div className="testimony-text-container">
        <p className="testimony-name">Emma Bostian en Suecia</p>
        <p className="testimony-role">Ingeniera de Software en Spotify</p>
        <p className="testimony-text">"I've always struggled with learning JavaScript.
         I've taken many courses but freeCodeCamp's course was the one which stuck.
          Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me
           the skills and confidence
          I needed to land my dream job as a software engineer at Spotify."</p>
      </div>

    </div>
  );
}

export default Testimony;