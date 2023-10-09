import React from "react";

function MetricCard({ bannerImg }) {
  return (
    <div
      className={`bg-[#FFFFFF] text-black text-xl h-[29vh] w-[42vh] flex flex-col rounded-xl drop-shadow-md`}
    >
      <div
        style={{ backgroundImage: `url(${bannerImg})` }}
        className="bg-[length:22vh_30vh] bg-center bg-end bg-no-repeat h-full w-full"
      ></div>
      <div className="flex flex-col gap-2 w-full bg-slate-100 px-4 py-2 backdrop-blur-xl rounded-b-xl">
        <h1>Metric: 00</h1>
        <p>Label: Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
}

export default MetricCard;
