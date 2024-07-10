import React from "react";
import '../styles/Flyer.css'
import flyer from '../assets/images/AugFlyer.jpg'

export default function Flyer() {
    return (
      <div className="flyer-container">
        <img src={flyer} alt="Speaker"/>
      </div>
    );
}