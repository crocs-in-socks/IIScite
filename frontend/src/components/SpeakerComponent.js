import React from "react";
import Speaker from "./SpeakerCard";
import "../styles/SpeakerComponent.css";

import DM from "../assets/images/DM.png";
import PKY from "../assets/images/PKY.png";
import SK from "../assets/images/SK.png";
import NS from "../assets/images/NS.png";
import SC from "../assets/images/S.png";
import PK from "../assets/images/PK.png";
import UN from "../assets/images/UN.png";
import SS from "../assets/images/SS.png";
import GVSS from "../assets/images/GVSS.png";
import CU from "../assets/images/CU.png";

export default function Speakers() {
    return(
        <>
            <div className="speakercomponent-container">
                <div className="speakercomponent-title">
                    Speakers
                </div>
                <div>
                    Speakers to be announced!
                </div>
                {/* <div className="speakercomponent-row">
                    <Speaker image={DM} name={"Mr. Dileep Mangsuli, Head, R&D Development centre, Siemens Healthineers"}/>
                    <Speaker image={PKY} name={"Prof. Phaneendra K. Yalavarthy Department of Computational and Data Sciences (CDS) Indian Institute of Science (IISc)"}/>
                    <Speaker image={SK} name={"Ms. Shwetanjali Kumari CSR Head Siemens Healthineers"}/>
                    <Speaker image={NS} name={"Prof. Neelam Sinha Centre for Brain Research Indian Institute of Science (IISc)"}/>
                </div>
                <div className="speakercomponent-row">
                    <Speaker image={SC} name={"Dr. Sanjay Chaudhary Senior Vice President - R&D engineering for Digital & Automation, Siemens Healthineers"}/>
                    <Speaker image={PK} name={"Prof. Prabhdeep Kaur Professor, Isaac Centre for Public Health, Indian Institute of Science, Bengaluru"}/>
                    <Speaker image={UN} name={"Dr. Uma Nambiar, CEO, Chief Executive Officer, Bagchi Parthsarthy Hospital, Indian Institute of Science (IISc)"}/>
                    <Speaker image={SS} name={"Prof. Swaminathan Sundararaman, Department of Nephrology, Indian Institute of Science (IISc)"}/>
                </div>
                <div className="speakercomponent-row">
                    <Speaker image={GVSS} name={"Prof. G.V. Shiva Shankar Professor of Mechano-Genomics, ETH Zurich & Head, Laboratory of Nanoscale Biology Paul Scherrer Institute, Switzerland"}/>
                    <Speaker image={CU} name={"Prof. Caroline Uhler Professor of Computer Science at MIT, Boston USA Director of EWSC Center at the Broad Institute"}/>
                </div> */}
            </div>
        </>
    )
}