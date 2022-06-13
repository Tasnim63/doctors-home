import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvileableAppinments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://nameless-harbor-83113.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className=" my-12 text-2xl text-center font-bold my-6">
        Available Appointments on {format(date, "PP")}
      </h2>
      <div className="mx-12 my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            key={service._id}
            setTreatment={setTreatment}
            service={service}
          ></Service>
        ))}
      </div>

      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          refetch={refetch}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvileableAppinments;
