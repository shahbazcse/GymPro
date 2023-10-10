import React from "react";
import { useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaRunning } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";
import { GiMeal } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import logo from "../assets/logo.png";

function NavBar() {
  const navigate = useNavigate();
  const path = window.location.pathname;
  return (
    <nav className="bg-[#FFFFFF] text-slate-600 h-screen lg:w-[15%] p-8 py-4 flex flex-col gap-4 font-[sintony]">
      <div className="flex items-center justify-center gap-2 text-2xl font-bold my-4">
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <p className="text-black tracking-wider">GymPro</p>
      </div>
      <div
        className={`flex gap-3 items-center cursor-pointer text-lg font-bold mt-8 px-8 py-4 rounded-full ${
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
        className={`flex gap-3 cursor-pointer text-lg font-bold px-8 py-4 rounded-full ${
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
        className={`flex gap-3 cursor-pointer text-lg font-bold px-8 py-4 rounded-full ${
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
        className={`flex gap-3 cursor-pointer text-lg font-bold px-8 py-4 rounded-full ${
          path === "/foods" ? "bg-[#dcf8f5]" : "hover:bg-[#F3FBFA]"
        }`}
        onClick={() => {
          navigate("/foods");
        }}
      >
        <GiMeal className="h-7 w-7" />
        Foods
      </div>
      <div className="flex items-center justify-center gap-8 fixed bottom-0 px-7 my-12">
        <a
          href="https://github.com/shahbazcse/GymPro"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="h-7 w-7 cursor-pointer text-[#88d4cd] hover:text-black" />
        </a>
        <a
          href="https://twitter.com/shahbaz_cse"
          target="_blank"
          rel="noreferrer"
        >
          <ImTwitter className="h-7 w-7 cursor-pointer text-[#88d4cd] hover:text-blue-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/shahbazcse/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="h-7 w-7 cursor-pointer text-[#88d4cd] hover:text-blue-600" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
