import "./App.css";
import Card from "./component/Card";
import Inputfield from "./component/Inputfield";
import Button from "./component/Button";
import { useContext } from "react";
import { WeatherContext } from "./context/context";
WeatherContext
function App() {
  const {fetchdata,searchdata,refreshData}=useContext(WeatherContext);
  
  return (
    <div className="container">
      <h1>🌤 Weather Forecast</h1>

      <div className="search-box">
        <Inputfield placeholder="Enter City Name" />
        <Button onClick={()=>fetchdata()} value="Search" />
      </div>

      <Card />

      <div className="refresh">
        <Button value="Refresh" onClick={()=>refreshData()} />
      </div>
    </div>
  );
}

export default App;