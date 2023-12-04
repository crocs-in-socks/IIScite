import React from "react";
import "../styles/Schedule.css"
import Schedule1 from "../assets/images/Schedule1.png"
import Schedule2 from "../assets/images/Schedule2.png"

export default function Schedule() {
    return(
        <>
            <div className="schedule-container">
                <div className="schedule-title">
                    Schedule
                </div>
                <div className="schedule-text">
                    The workshop will be held on the 24th and 25th of February 2023
                </div>
                <div className="schedule-image-container">
                    <img src={Schedule1} alt=""/>
                    <img src={Schedule2} alt=""/>
                </div>
            </div>
        </>
    )
}