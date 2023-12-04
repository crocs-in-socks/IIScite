import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import SpeakerPage from './pages/SpeakerPage';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/schedule" element={<Schedule />} />
          <Route exact path="/speakers" element={<SpeakerPage />} />
          <Route exact path="/" element={<Home />} /> 
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
