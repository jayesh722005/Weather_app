export const weatherdata=async(city)=>
{
    const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=317e070f7a1d4ca58a1155124260708&q=${city}&aqi=no`,{
        method:"GET",
    })
    return await response.json();
}