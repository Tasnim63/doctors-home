import React from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigte = useNavigate();
  return (
    <div className="mx-12">
      <h2 className=" my-12 text-2xl text-center font-bold my-6">Our Blogs</h2>
      <div class=" hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.freepik.com/free-photo/my-daughter-isn-t-afraid-pay-visit-here_329181-7634.jpg?size=626&ext=jpg&uid=R64903934&ga=GA1.2.270866342.1647831681"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-2xl font-bold">
            APRIL 17 2022 Can depression increase your risk for heart disease?
          </h1>
          <p class="py-6">Heart Transplant / By Admin</p>
          <div class="divider"></div>
          <p class="py-6">
            The medical experts carefully transplant the heart you are nothing
            without care.The medical experts carefully transplant the heart you
            are nothing without care
          </p>
          <button
            onClick={() => navigte("/blogs")}
            class=" btn btn-outline font-bold"
          >
            BLOGS PAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
