import React from "react";
import Speaker from "./SpeakerCard";
import "../styles/SpeakerComponent.css";
import SpeakerImage from "../assets/images/speaker.jpeg";

export default function Speakers() {
    return(
        <>
            <div className="speakercomponent-container">
                <Speaker image={SpeakerImage} name={"Prof. Phaneendra Yalavarthy, IISc Bengaluru"}/>
            </div>
        </>
    )
}