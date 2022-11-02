import { useState } from "react";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registrar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Events/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
