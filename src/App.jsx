import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
