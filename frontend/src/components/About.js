import React from "react"
import "../styles/About.css"
import Backdrop from "../assets/images/About.jpg"

export default function About() {
    return(
        <>
            <div className="about-container">
                <div className="about-image-container">
                    <img src={Backdrop} alt="" />
                </div>
                <div className="about-text-container">
                    <div className="about-text-title">
                        About the Workshop
                    </div>
                    <div className="about-text-content">
                    The workshop brings together researchers working in the area of AI for medical image computing and public health to provide a comprehensive overview of recent advancements in precision medicine and further scope in the important applications such as subject-level screening, diagnosis, therapeutic planning and follow-up. 
                    </div>
                </div>
            </div>
        </>
    )
}