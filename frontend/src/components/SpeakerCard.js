import React from "react";
import "../styles/SpeakerCard.css"

export default function SpeakerCard(props) {

    return(
        <>
            <div className="speakercard-container">
                <div className="speakercard-image">
                    <img src={props.image} alt="Speaker"/>
                </div>
                <div className="speakercard-name">
                    {props.name}
                </div>
            </div>
        </>
    )
}