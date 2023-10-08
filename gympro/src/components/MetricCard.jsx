import React from "react";

function MetricCard({ bgColor }) {
  return (
    <div
      className={`bg-[${bgColor}] text-black text-xl h-[29vh] w-[56vh] flex flex-col rounded-xl drop-shadow-md`}
    >
      <div className="h-[18vh] bg-red-400 rounded-md">Image</div>
      <div className="flex flex-col gap-4 p-4">
        <h1>Metric</h1>
        <p>Label</p>
      </div>
    </div>
  );
}

export default MetricCard;
