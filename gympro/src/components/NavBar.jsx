import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const path = window.location.pathname;
  return (
    <nav className="text-white h-screen lg:w-[10%] pl-8 py-4 flex flex-col gap-4 drop-shadow-lg">
      <div className="text-2xl font-bold my-4">GymPro</div>
      <div
        className={`cursor-pointer text-lg font-bold mt-8 px-8 py-4 rounded-l-full ${
          path === "/" ? "bg-slate-700" : "hover:bg-gray-800"
        }`}
        onClick={() => {
          navigate("/");
        }}
      >
        Dashboard
      </div>
      <div
        className={`cursor-pointer text-lg font-bold px-8 py-4 rounded-l-full ${
          path === "/exercise" ? "bg-slate-700" : "hover:bg-gray-800"
        }`}
        onClick={() => {
          navigate("/exercises");
        }}
      >
        Exercises
      </div>
      <div
        className={`cursor-pointer text-lg font-bold px-8 py-4 rounded-l-full ${
          path === "/goals" ? "bg-slate-700" : "hover:bg-gray-800"
        }`}
        onClick={() => {
          navigate("/goals");
        }}
      >
        Goals
      </div>
      <div
        className={`cursor-pointer text-lg font-bold px-8 py-4 rounded-l-full ${
          path === "/foods" ? "bg-slate-700" : "hover:bg-gray-800"
        }`}
        onClick={() => {
          navigate("/foods");
        }}
      >
        Foods
      </div>
    </nav>
  );
}

export default NavBar;
