import { React } from "react"
import "../styles/Navbar.css"

export default function Navbar() {
    return(
        <>
            <div className="navbar-container">
                <div className="navbar-list">
                    <div className="navbar-left">
                        <div className="navbar-list-item">
                            <a href="/home" className="navbar-link">Home</a>
                        </div>
                        <div className="navbar-list-item navbar-left">
                            <a href="/schedule" className="navbar-link">Schedule</a>
                        </div>
                        <div className="navbar-list-item navbar-left">
                            <a href="/speakers" className="navbar-link">Speakers</a>
                        </div>
                        <div className="navbar-list-item navbar-left">
                            More +
                        </div>
                    </div> 
                </div>
                <div className="navbar-list-item navbar-title">
                    WORKSHOP ON MEDICAL IMAGE COMPUTING
                </div>
            </div>
        </>
    );
}