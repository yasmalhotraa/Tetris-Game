import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tetris from "./components/Tetris";
import LandingPage from "./components/LandingPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/tetris" element={<Tetris />} />
    </Routes>
  </Router>
);

export default App;
