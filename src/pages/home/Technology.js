import React from "react";
import "../Doctors/DoctorCart.css";
const Technology = () => {
  return (
    <>
      <div className="mx-12 text-center my-12">
        <h2 className="text-2xl font-serif font-bold my-6">
          Our Lastest Technology
        </h2>

        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJke1p5ZQeY_6glFO6S29hpzA5I1DefGlPUA&usqp=CAU"
            alt=""
            className=" w-full h-72"
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0goLB3eHMsUQdFF3gIJNIP26e3Xr7wJGAA&usqp=CAU"
            alt=""
            className=" w-full h-72"
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOlPqckwHVK71S1r9Dx1YPFxO4U5B2kTEzw&usqp=CAU"
            alt=""
            className=" w-full h-72"
          />
        </div>
        <div className="grid  my-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROiIprJzEssG-0v2Pf4KMytpTM5_Q9XMO0qw&usqp=CAU"
            alt=""
            className=" w-full h-72"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLM54cmguHhUmKlFLGIyPUV3dYMvWWWPytIw&usqp=CAU"
            alt=""
            className=" w-full h-72"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs4VByIQyxchowJw9VipDIpFssZ1Pd3BQjuA&usqp=CAU"
            alt=""
            className=" w-full h-72"
          />
        </div>
      </div>
    </>
  );
};

export default Technology;
