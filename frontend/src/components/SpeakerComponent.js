import React from "react";
import Speaker from "./SpeakerCard";
import "../styles/SpeakerComponent.css";
import SpeakerImage1 from "../assets/images/speaker.jpeg";

export default function Speakers() {
    return(
        <>
            <div className="speakercomponent-container">

                <div className="speakercomponent-title">
                    Speakers
                </div>
                <div className="speakercomponent-row">
                    <Speaker image={SpeakerImage1} name={"Prof. Phaneendra Yalavarthy, IISc Bengaluru"}/>
                </div>
            </div>
        </>
    )
}