import React from "react";
import Speaker from "./SpeakerCard";
import "../styles/SpeakerComponent.css";
import SpeakerImage1 from "../assets/images/speaker.jpeg";
import SpeakerImage2 from "../assets/images/speaker2.jpg";
import SpeakerImage3 from "../assets/images/speaker3.jpeg";
import SpeakerImage4 from "../assets/images/speaker4.jpeg";
import SpeakerImage5 from "../assets/images/speaker5.png";
import SpeakerImage6 from "../assets/images/speaker6.png";
import SpeakerImage7 from "../assets/images/speaker7.jpeg";
import SpeakerImage8 from "../assets/images/speaker8.jpeg";
import SpeakerImage9 from "../assets/images/speaker9.jpg";

export default function Speakers() {
    return(
        <>
            <div className="speakercomponent-container">

                <div className="speakercomponent-title">
                    Speakers
                </div>
                <div className="speakercomponent-row">
                    <Speaker image={SpeakerImage1} name={"Prof. Phaneendra Yalavarthy, IISc Bengaluru"}/>
                    <Speaker image={SpeakerImage2} name={"Dr. Lokesh B, Aster CMI"}/>
                    <Speaker image={SpeakerImage3} name={"Dr. Mythri Shankar, Aster CMI"}/>
                </div>
                <div className="speakercomponent-row">
                    <Speaker image={SpeakerImage4} name={"Prof. Pradipta Mahji, ISI Kolkata "}/>
                    <Speaker image={SpeakerImage5} name={"Prof. Ananda Shankar Chowdhury, Jadavpur University"}/>
                    <Speaker image={SpeakerImage6} name={"Prof. Chandra Sekhar Seelamantula, IISc Bengaluru"}/>
                </div>
                <div className="speakercomponent-row">
                    <Speaker image={SpeakerImage7} name={"Dr. Prasad Sudhakar, Staff Scientist, GE"}/>
                    <Speaker image={SpeakerImage8} name={"Prof. Neelam Sinha, IIIT Bengaluru"}/>
                    <Speaker image={SpeakerImage9} name={"Prof. Debnath Pal, IISc Bengaluru"}/>
                </div>
            </div>
        </>
    )
}