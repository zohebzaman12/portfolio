import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Sections/Profile";
import About from "./Components/Sections/About";
import Skills from "./Components/Sections/Skills";
import Projects from "./Components/Sections/Projects";
import Contact from "./Components/Sections/Contact";
import Footer from "./Components/Sections/Footer";
import HamburgerNav from "./Components/Sections/HamburgerNav";
import "./mediaqueries.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <HamburgerNav />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
