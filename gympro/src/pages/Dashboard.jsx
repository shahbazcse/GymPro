import React from "react";
import MetricCard from "../components/MetricCard";
import img1 from "../assets/01.svg";
import img2 from "../assets/02.svg";
import img3 from "../assets/03.svg";
import img4 from "../assets/04.svg";

function Dashboard() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl w-full pl-20 pt-9 font-[sintony]">Dashboard</div>
      <div className="text-lg mx-[12vh] lg:mx-[32vh] mt-8 font-[poppins] text-slate-600">
        GymPro is your all-in-one fitness companion designed to help you achieve
        your health and wellness goals. Whether you're a seasoned athlete or
        just starting your fitness journey, this app is here to support you
        every step of the way. GymPro is more than just a fitness app, it's a
        comprehensive tool to help you lead a healthier, happier life.
        <p className="mt-3">
          Start your journey to a better you today with GymPro!
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center my-[4vh] mx-[16vh] gap-16 font-[poppins]">
        <MetricCard bannerImg={img1} />
        <MetricCard bannerImg={img2} />
        <MetricCard bannerImg={img3} />
        <MetricCard bannerImg={img4} />
      </div>
    </div>
  );
}

export default Dashboard;
