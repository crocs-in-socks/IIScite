import React from "react";
import Navbar from '../components/Navbar';
import LandingScreen from '../components/LandingScreen';
import About from '../components/About';
import Scope from '../components/Scope';
import SpeakerComponent from '../components/SpeakerComponent';

export default function Home() {
    return (
      <div className="home-container">
        <Navbar />
        <LandingScreen />
        <About />
        <Scope />
        <SpeakerComponent />
      </div>
    );
}