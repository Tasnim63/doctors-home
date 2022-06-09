import React from "react";
import "./DoctorCart.css";
const DoctorCart = ({ doctor }) => {
  const { id, name, img, service, description } = doctor;

  return (
    <>
      <div class="card w-96  bg-base-100 shadow-xl">
        <div className="zoom-in">
          <figure>
            <img src={img} className=" h-56" alt="Shoes" />
          </figure>
        </div>

        <div class="card-body">
          <h2 class="card-title">
            {name}
            <div class="badge text-white  bg-slate-600">{service}</div>
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default DoctorCart;
