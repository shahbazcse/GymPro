import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Exercises from "./pages/Exercises";
import Goals from "./pages/Goals";
import Foods from "./pages/Foods";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="bg-red-400">
        <Routes>
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/foods" element={<Foods />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
