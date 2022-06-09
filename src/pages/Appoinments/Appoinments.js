import React, { useState } from "react";
import AppoinmentsBanner from "./AppoinmentsBanner";
import AvileableAppinments from "./AvileableAppinments";

const Appoinments = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <AppoinmentsBanner></AppoinmentsBanner>
      <AvileableAppinments date={date}></AvileableAppinments>
    </>
  );
};

export default Appoinments;
