import React, { useContext } from "react";
import "./Inputfield.css";
import { WeatherContext } from "../context/context";

function Inputfield({placeholder}) {
    const { searchcity, setsearchcity } = useContext(WeatherContext);
  
  return (
    <input
      className="inputfield"
      type="text"
      placeholder={placeholder}
      value={searchcity}
      onChange={(e)=>setsearchcity(e.target.value)}
    />
  );
}

export default Inputfield;