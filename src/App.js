import React from "react";
import "./style.css";
import NavBar from "./Navbar";
import MasterHead from "./Masterhead";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import CopyRights from "./Copyrights";
const App = () => {
  return (
    <div>
      <NavBar />
      <MasterHead />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <CopyRights />
    </div>
  );
};

export default App;
