import React from "react";
import { useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaRunning } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";
import { GiMeal } from "react-icons/gi";

function NavBar() {
  const navigate = useNavigate();
  const path = window.location.pathname;
  return (
    <nav className="bg-[##FFFFFF] h-screen lg:w-[15%] pl-8 py-4 flex flex-col gap-4 font-[sintony]">
      <div className="text-2xl font-bold my-4">GymPro</div>
      <div
        className={`flex gap-3 items-center cursor-pointer text-lg font-bold mt-8 px-8 py-4 rounded-l-full ${
          path === "/" ? "bg-[#dcf8f5]" : "hover:bg-[#F3FBFA]"
        }`}
        onClick={() => {
          navigate("/");
        }}
      >
        <RxDashboard className="h-7 w-7" />
        Dashboard
      </div>
      <div
        className={`flex gap-3 cursor-pointer text-lg font-bold px-8 py-4 rounded-l-full ${
          path === "/exercises" ? "bg-[#dcf8f5]" : "hover:bg-[#F3FBFA]"
        }`}
        onClick={() => {
          navigate("/exercises");
        }}
      >
        <FaRunning className="h-7 w-7" />
        Exercises
      </div>
      <div
        className={`flex gap-3 cursor-pointer text-lg font-bold px-8 py-4 rounded-l-full ${
          path === "/goals" ? "bg-[#dcf8f5]" : "hover:bg-[#F3FBFA]"
        }`}
        onClick={() => {
          navigate("/goals");
        }}
      >
        <GiBullseye className="h-7 w-7" />
        Goals
      </div>
      <div
        className={`flex gap-3 cursor-pointer text-lg font-bold px-8 py-4 rounded-l-full ${
          path === "/foods" ? "bg-[#dcf8f5]" : "hover:bg-[#F3FBFA]"
        }`}
        onClick={() => {
          navigate("/foods");
        }}
      >
        <GiMeal className="h-7 w-7" />
        Foods
      </div>
    </nav>
  );
}

export default NavBar;
