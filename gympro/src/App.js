import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Exercises from "./pages/Exercises";
import Goals from "./pages/Goals";
import Foods from "./pages/Foods";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App flex text-slate-600 font-bold">
      <NavBar />
      <div className="w-[85%] bg-[#dcf8f5] h-screen overflow-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/foods" element={<Foods />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
