import React from "react"
import "../styles/About.css"

export default function About() {
    return(
        <>
            <div className="about-container">
                <div className="about-image-container">
                    Image Goes Here
                </div>
                <div className="about-text-container">
                    <div className="about-text-title">
                        About the Workshop
                    </div>
                    <div className="about-text-content">
                    To help diagnosis, therapeutic planning and follow-up, and biomedical research, medical image computing involves development of mathematical and computational algorithms for reliable, automated, quantitative analysis of medical imaging data.

                    It is necessary to use model-based approaches in medical image computing tasks that take into account prior knowledge. These models provide parameters to account for object appearance variability, making it possible to structure the image analysis problem as an optimization problem in search of the model parameters that best explain the image data.

                    Different techniques exist based on the model's representation of choice. One popular choice is machine learning/artificial intelligence, which provides the ability to learn appropriate models directly from existing (curated) data.

                    The workshop will provide wonderful opportunity to interact and network with academics, clinicians and experts from industry. The workshop is open to the researchers and students working in the area of medical imaging. 
                    </div>
                </div>
            </div>
        </>
    )
}