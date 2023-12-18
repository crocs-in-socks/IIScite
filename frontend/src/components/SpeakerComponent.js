import React from "react";
import Speaker from "./SpeakerCard";
import "../styles/SpeakerComponent.css";
import SpeakerImage1 from "../assets/images/speaker.jpeg";
import SpeakerImage10 from "../assets/images/speaker10.jpg"
import SpeakerImage11 from "../assets/images/speaker11.jpg"
import SpeakerImage12 from "../assets/images/speaker12.jpeg"

export default function Speakers() {
    return(
        <>
            <div className="speakercomponent-container">

                <div className="speakercomponent-title">
                    Speakers
                </div>
                <div className="speakercomponent-row">
                    <Speaker image={SpeakerImage1} name={"Prof. Phaneendra Yalavarthy, IISc Bengaluru"}/>
                    <Speaker image={SpeakerImage10} name={"Mr. Dileep Mangsuli, Head, R&D Development centre, Siemens Healthineers"}/>
                    <Speaker image={SpeakerImage11} name={"Prof. Neelam Sinha, IISc Bengaluru"}/>
                    <Speaker image={SpeakerImage12} name={"Prof.  Prabhdeep Kaur, IISc Bengaluru"}/>
                </div>
                <div className="speakercomponent-row">
                    More Speakers to Come.
                </div>
            </div>
        </>
    )
}