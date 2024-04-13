//import logo from './logo.svg';
//import McqCard from "./components/McqCard";
//import NavBar from "./components/Navbar";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route  path="/" element={<LandingPage/>} />
          <Route path="/quiz" element={<QuizPage/>} />
          <Route path="/result" element={<ResultPage/>} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
