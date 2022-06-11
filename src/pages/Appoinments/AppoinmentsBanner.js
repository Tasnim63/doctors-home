import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const AppoinmentsBanner = ({ date, setDate }) => {
  return (
    <>
      <div
        class="hero  h-96"
        style={{
          background: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLM54cmguHhUmKlFLGIyPUV3dYMvWWWPytIw&usqp=CAU")`,
          backgroundSize: "cover",
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-3xl font-bold">Booked Your Appointments</h1>
            <p class="mb-5">
              Quickly response provide our specialist doctrors to patients in
              online conference
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center my-12">
        <DayPicker mode="single" selected={date} onSelect={setDate} />
      </div>
    </>
  );
};

export default AppoinmentsBanner;
