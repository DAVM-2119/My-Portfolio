import "./App.scss";
import Navbar from "./Componets/Navbar/Index";
import { Routes, Route } from "react-router-dom";

import Home from "./Containers/Home/Index";
import About from "./Containers/About/Index";
import Resume from "./Containers/Resume/Index";
import Skills from "./Containers/Skills/Index";
import Portfolio from "./Containers/Portfolio/Index";
import Contact from "./Containers/Contact/Index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App__main-main-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
