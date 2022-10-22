import { useState } from "react";
import "./App.css";
import Registrar from "./pages/Registrar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Registrar />
    </div>
  );
}

export default App;
