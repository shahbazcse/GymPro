import React from "react";
import ExerciseCard from "../components/ExerciseCard";

function Exercises() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl w-full pl-20 pt-9 font-[sintony]">Exercises</div>
      <div className="text-lg mx-[12vh] lg:mx-[32vh] mt-8 font-[poppins]">
        Exercise Tracking is your personal fitness diary, meticulously designed
        to help you keep a close eye on your workout routines. Whether you're
        into cardio, strength training, or yoga, it offers a seamless way to
        log, monitor, and optimize your fitness activities.
      </div>
      <div className="flex gap-2 justify-center items-center mt-6 text-black hover:bg-[#f09342] bg-[#F1A868] rounded-full drop-shadow-md cursor-pointer">
        <span className="pl-4 py-3">Add Exercise </span>
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
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
      </div>
    </div>
  );
}

export default Exercises;
