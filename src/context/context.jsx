import { createContext, useEffect, useState } from "react";
import { weatherdata } from "../API/Api";

export const WeatherContext=createContext(null);

export const Weatherprovider=(props)=>
{
    const [data,setdata]=useState(null);
    const [searchcity,setsearchcity]=useState("indore");

    const fetchdata=async()=>
    {
        try{
             const res = await weatherdata(searchcity);
             setdata(res);
        }
        catch(err){
            setdata(err);
        }
    }
    const refreshData=()=>
    {
        setsearchcity("");
    }
    useEffect(()=>
    {
        fetchdata();
    },[])
    return(
        <WeatherContext.Provider value={{data,setdata,searchcity,setsearchcity,fetchdata,refreshData}}>
            {props.children}
        </WeatherContext.Provider>
    )
}