import React from "react";
import banner1 from "../../assets/images/clock.svg";
import banner2 from "../../assets/images/marker.svg";
import banner3 from "../../assets/images/phone.svg";
const Info = () => {
  return (
    <>
      <h1 className=" text-center my-6 font-serif font-bold  text-2xl">
        Our Information Provide Here
      </h1>

      <div className=" grid grid-cols-1 lg:grid-cols-3 my-12 gap-5 mx-6">
        <div class="card  card-side bg-slate-600 p-4 shadow-xl">
          <figure>
            <img src={banner1} className="w-28 h-28" alt="Movie" />
          </figure>
          <div class="card-body ">
            <h2 class="card-title text-white">Opening Hours</h2>
            <p className="text-white">
              breathing difficulty may be health issue needs medical attention.
            </p>
          </div>
        </div>
        <div class="card  card-side bg-slate-800 p-4 shadow-xl">
          <figure>
            <img src={banner2} className=" h-28" alt="Movie" />
          </figure>
          <div class="card-body  ">
            <h2 class="card-title text-white">Our Locations</h2>
            <p className="text-white">
              breathing health issue needs medical attention.
            </p>
          </div>
        </div>
        <div class="card  card-side  bg-slate-600 p-4 shadow-xl">
          <figure>
            <img src={banner3} className="w-28 h-28" alt="Movie" />
          </figure>
          <div class="card-body ">
            <h2 class="card-title text-white">Contact Us</h2>
            <p className="text-white">
              breathing difficulty may be health issue needs
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
