import React from "react"
import "../styles/Scope.css"

export default function Scope() {
    return(
        <>
            <div className="scope-container">
                <div className="scope-textdeco-container">
                    Scope
                </div>
                <div className="scope-text-container">
                    <ul className="scope-text-content">
                        Topics of discussion may include, but not limited to, recent novel techniques for:
                        <li>
                            Medical image reconstruction, registration, segmentation on various imaging modalities
                        </li>
                        <li>
                            Population-level probabilistic modelling
                        </li>
                        <li>
                            Improving deep learning model generalizability
                        </li>
                        <li>
                            Applications including computer-aided diagnosis, therapeutic planning and follow-up
                        </li>
                        <li>
                            Practical AI coding sessions to provide hands-on experience on AI tools implementation. 
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}