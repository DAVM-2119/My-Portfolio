import "./App.scss";
import Navbar from "./Componets/Navbar/Index";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./Containers/Home/Index";
import About from "./Containers/About/Index";
import Resume from "./Containers/Resume/Index";
import Skills from "./Containers/Skills/Index";
import Portfolio from "./Containers/Portfolio/Index";
import Contact from "./Containers/Contact/Index";

function App() {
  const [menuOpen, setMenuOpen] = useState(false); // ✅ track menu state

  return (
    <div className={`App ${menuOpen ? "menu-open" : ""}`}>
      <Navbar onMenuToggle={setMenuOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
