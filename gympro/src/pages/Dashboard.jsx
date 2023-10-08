import React from "react";
import MetricCard from "../components/MetricCard";

function Dashboard() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl w-full pl-20 pt-9">Dashboard</div>
      <div className="text-lg mx-[12vh] lg:mx-[29vh] mt-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
        nesciunt natus maiores laboriosam mollitia magni assumenda eius impedit!
        Quaerat quisquam dolore debitis dolores totam enim numquam veritatis
        dolor iusto aut, optio, doloribus est velit ex neque quia libero
        exercitationem aliquid possimus voluptatem. Exercitationem corrupti
        vitae dolorem quos alias cum a?
      </div>
      <div className="flex flex-wrap justify-center items-center m-[4vh] gap-16 over">
        <MetricCard />
        <MetricCard />
        <MetricCard />
        <MetricCard />
      </div>
    </div>
  );
}

export default Dashboard;
