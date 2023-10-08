import React from "react";
import GoalCard from "../components/GoalCard";

function Goals() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl w-full pl-20 pt-9 font-[sintony]">Goals</div>
      <div className="text-lg mx-[12vh] lg:mx-[32vh] mt-8 font-[poppins]">
        Goal Tracking feature is your ultimate tool for turning dreams into
        reality. Whether you aspire to shed those extra pounds, run a marathon,
        or simply lead a healthier lifestyle, this is your dedicated companion
        to set, monitor, and achieve your fitness aspirations.
      </div>
      <div className="flex gap-2 justify-center items-center mt-6 text-slate-200 hover:bg-[#3e30d4] bg-[#5349ca] rounded-full drop-shadow-md cursor-pointer">
        <span className="pl-4 py-3">Add Goal </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="42"
          height="42"
          viewBox="0 0 50 50"
        >
          <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
        </svg>
      </div>
      <div className="flex flex-wrap justify-center items-center mx-[12vh] lg:mx-[32vh] my-[4vh] gap-16 font-[poppins]">
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
      </div>
    </div>
  );
}

export default Goals;