import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Home2 from "./components/Home/Home2";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import "./index.css";
import "./App.css";
import Particle from "./components/Particle";
import "bootstrap/dist/css/bootstrap.min.css";
import Roadmap from "./components/Home/roadmap";
// import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Particle />
      <Preloader load={load} />
      <Navbar />
      {/* <Home /> */}
      {/* <ScrollToTop /> */}
      {/* <div className="App" id={load ? "no-scroll" : "scroll"}> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/collection" element={<Home2 />} />
        </Routes>
        <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;