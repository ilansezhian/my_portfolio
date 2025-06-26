import "./App.css";

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import WeatherApp from "./components/WeatherApp";
import TodoApp from "./components/TodoApp";
import CounterApp from "./components/CounterApp";
import QuizApp from "./components/QuizApp";

// import AppEcommerce from "./ecommercecomponent/ecommerce/AppEcommerce";

import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/ping")
      .then((res) => res.json())
      .then((data) => console.log("Backend says:", data))
      .catch((err) => console.error("Failed to connect to backend:", err));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Routes>
          {/* 🌐 Full Portfolio Layout for Home Page */}
          <Route
            path="/"
            element={
              <>
                <Header
                  toggleTheme={() => setDarkMode(!darkMode)}
                  darkMode={darkMode}
                />
                <Hero />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />
          {/* 🧮 Minimal Layout for Calculator Page */}
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/weather" element={<WeatherApp />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/counter" element={<CounterApp />} />
          <Route path="/quiz" element={<QuizApp />} />
          {/* <Route path="/ecommerce/*" element={<AppEcommerce />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
