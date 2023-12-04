import React from "react";
import LandingScreen from '../components/LandingScreen';
import About from '../components/About';
import Scope from '../components/Scope';
import SpeakerComponent from '../components/SpeakerComponent';

export default function Home() {
    return (
      <div className="home-container">
        <LandingScreen />
        <About />
        <Scope />
        <SpeakerComponent />
      </div>
    );
}