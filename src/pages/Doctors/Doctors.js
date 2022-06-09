import React, { useEffect, useState } from "react";
import DoctorCart from "./DoctorCart";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <h1 className=" text-center my-6 font-serif font-bold  text-2xl">
        Our Doctors
      </h1>

      <div className=" mx-6 gap-4 grid grid-cols-1 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <DoctorCart key={doctor.id} doctor={doctor}></DoctorCart>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
