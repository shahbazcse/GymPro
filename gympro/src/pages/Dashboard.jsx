import React from "react";
import MetricCard from "../components/MetricCard";

function Dashboard() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl w-full pl-20 pt-9 font-[sintony]">Dashboard</div>
      <div className="text-lg mx-[12vh] lg:mx-[32vh] mt-8 font-[poppins]">
        GymPro is your all-in-one fitness companion designed to help you achieve
        your health and wellness goals. Whether you're a seasoned athlete or
        just starting your fitness journey, this app is here to support you
        every step of the way. GymPro is more than just a fitness app, it's a
        comprehensive tool to help you lead a healthier, happier life.
        <p className="mt-3">Start your journey to a better you today with GymPro!</p>
      </div>
      <div className="flex flex-wrap justify-center items-center m-[4vh] gap-16 font-[poppins]">
        <MetricCard />
        <MetricCard />
        <MetricCard />
        <MetricCard />
      </div>
    </div>
  );
}

export default Dashboard;
