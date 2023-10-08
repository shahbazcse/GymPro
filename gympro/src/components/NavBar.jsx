import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-slate-400">
      <div>
        <Link to="/">Dashboard</Link>
      </div>
      <div>
        <Link to="/exercises">Exercises</Link>
      </div>
      <div>
        <Link to="/goals">Goals</Link>
      </div>
      <div>
        <Link to="foods">Foods</Link>
      </div>
    </nav>
  );
}

export default NavBar;
