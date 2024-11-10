import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={Menu} />
          <Route path="/menu" element={Menu} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
