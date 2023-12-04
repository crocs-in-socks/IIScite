import React from "react";
import LandingScreen from '../components/LandingScreen';
import About from '../components/About';
import Apply from '../components/Apply';
import SpeakerComponent from '../components/SpeakerComponent';

export default function Home() {
    return (
      <div className="home-container">
        <LandingScreen />
        <About />
        <Apply />
        <SpeakerComponent />
      </div>
    );
}