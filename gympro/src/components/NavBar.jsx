import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const path = window.location.pathname;
  return (
    <nav className="bg-[##FFFFFF] h-screen lg:w-[10%] pl-8 py-4 flex flex-col gap-4 font-[sintony]">
      <div className="text-2xl font-bold my-4">GymPro</div>
      <div
        className={`cursor-pointer text-lg font-bold mt-8 px-8 py-4 rounded-l-full ${
          path === "/" ? "bg-[#dcf8f5]" : "hover:bg-[#F3FBFA]"
        }`}
        onClick={() => {
          navigate("/");
        }}
      >
        Dashboard
      </div>
      <div
        className={`cursor-pointer text-lg font-bold px-8 py-4 rounded-l-full ${
          path === "/exercises" ? "bg-[#dcf8f5]" : "hover:bg-[#F3FBFA]"
        }`}
        onClick={() => {
          navigate("/exercises");
        }}
      >
        Exercises
      </div>
      <div
        className={`cursor-pointer text-lg font-bold px-8 py-4 rounded-l-full ${
          path === "/goals" ? "bg-[#dcf8f5]" : "hover:bg-[#F3FBFA]"
        }`}
        onClick={() => {
          navigate("/goals");
        }}
      >
        Goals
      </div>
      <div
        className={`cursor-pointer text-lg font-bold px-8 py-4 rounded-l-full ${
          path === "/foods" ? "bg-[#dcf8f5]" : "hover:bg-[#F3FBFA]"
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
