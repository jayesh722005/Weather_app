import React, { useContext } from "react";
import "./Card.css";
import { WeatherContext } from "../context/context";

const Card = () => {
  const { data } = useContext(WeatherContext);

   
  return (
    <div className="card">
      {!data || !data.current || !data.location ? (
        <h2>Something went wrong</h2>
      ) :  (
        <>
          <img
            src={`https:${data.current.condition.icon}`}
            alt="weather icon"
          />

          <h2>{data.current.temp_c}°C</h2>

          <h5>{data.location.name}</h5>
        </>
      )}
    </div>
  );
};

export default Card;
