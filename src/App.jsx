import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Registrar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
