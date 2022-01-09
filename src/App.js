import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Algo_Animation from "./components/Algo_Animation";
import Video_Tut from "./components/Video_Tut";
import Blog from "./components/Blog";
import Career from "./components/Career";
import Team from "./components/Team";
import PrivacyPolicy from "./components/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/video-tut" element={<Video_Tut />} />
        <Route exact path="/algo-anim" element={<Algo_Animation />} />
        <Route exact path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route exact path="/career" element={<Career />} />
        <Route exact path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
