import React from "react"
import "../styles/About.css"
import Details from "../assets/images/About.png"

export default function About() {
    return(
        <>
            <div className="about-container">
                <div className="about-image-container">
                    <img src={Details} alt="" />
                </div>
                <div className="about-text-container">
                    <div className="about-text-title">
                        About the Workshop
                    </div>
                    <div className="about-text-content">
                    The workshop brings together researchers working in the area of AI for medical image computing and public health to provide a comprehensive overview of recent advancements in precision medicine and further scope in the important applications such as subject-level screening, diagnosis, therapeutic planning and follow-up. 

                    <br></br>
                    <br></br>
                    
                    Note: Attendees kindly carry your own laptops for the hands-on session.

                    </div>
                </div>
                
            </div>
        </>
    )
}