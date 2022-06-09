import React from "react";
import "./HomeCarosel.css";
const HomeCarosel = () => {
  return (
    <>
      <div class="carousel w-full">
        <div id="item1" class="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?t=st=1654592662~exp=1654593262~hmac=92f2a7e451d0f999709b25a1848acf0ad2e81857367fad5b70b319a4a3f5881a&w=1380"
            class="w-full"
          />
        </div>
        <div id="item2" class="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-psd/medical-mock-up-with-capsules_23-2148478001.jpg?size=626&ext=jpg&uid=R64903934&ga=GA1.2.270866342.1647831681"
            class="w-full"
          />
        </div>
        <div id="item3" class="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-psd/top-view-stethoscope-mock-up_23-2148552973.jpg?size=626&ext=jpg&uid=R64903934&ga=GA1.2.270866342.1647831681"
            class="w-full"
          />
        </div>
        <div id="item4" class="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-psd/vaccine-vial-mockup_23-2149165369.jpg?size=626&ext=jpg&uid=R64903934&ga=GA1.2.270866342.1647831681"
            class="w-full"
          />
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">
          1
        </a>
        <a href="#item2" class="btn btn-xs">
          2
        </a>
        <a href="#item3" class="btn btn-xs">
          3
        </a>
        <a href="#item4" class="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};

export default HomeCarosel;
