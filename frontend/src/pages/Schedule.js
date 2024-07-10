import React from "react";
import "../styles/Schedule.css"
import Navbar from "../components/Navbar";
import Schedule1 from "../assets/images/Schedule-1.png"
import Schedule2 from "../assets/images/Schedule-2.png"
import Schedule3 from "../assets/images/Schedule-3.png"

export default function Schedule() {
    return(
        <>
            <Navbar />
            <div className="schedule-container">
                <div className="schedule-title">
                    Schedule
                </div>
                <div>
                    1st and 2nd August, 2024
                </div>
                {/* <div className="schedule-image-container">
                    <img src={Schedule1} alt="" />
                    <img src={Schedule2} alt="" />
                    <img src={Schedule3} alt="" />
                </div> */}
            </div>
        </>
    )
}