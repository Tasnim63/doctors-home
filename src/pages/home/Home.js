import React from "react";
import Doctors from "../Doctors/Doctors";
import Blogs from "./Blogs";
import HomeCarosel from "./HomeCarosel";
import Info from "./Info";
import Services from "./Services";
import Technology from "./Technology";

const Home = () => {
  return (
    <div>
      <HomeCarosel></HomeCarosel>
      <Doctors></Doctors>
      <Blogs></Blogs>
      <Services></Services>
      <Technology></Technology>
      <Info></Info>
    </div>
  );
};

export default Home;
