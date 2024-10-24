import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage/Home";
import Footer from "./components/Footer";
import About from "./pages/AboutPage/About";
import Projects from "./pages/ProjectsPage/Projects";
import Contact from "./pages/ContactPage/Contact";
import Skills from "./pages/SkillsPage/Skills";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Fixed Navbar */}
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        {/* Scrollable Main Content */}
        <div className="flex-grow overflow-auto">
          <main className="p-4 h-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
        </div>

        {/* Fixed Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
