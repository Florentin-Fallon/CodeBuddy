import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Quiz from "./Quiz";
import MiniJeux from "./MiniJeux";
import Origines from "./Origines";
import Profil from "./Profil";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/origines" element={<Origines />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/minijeux" element={<MiniJeux />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/minijeux" element={<MiniJeux />} />
      </Routes>
    </Router>
  );
}

export default App;
