import "./App.css";
import "./mediaquery.css"
import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import { REACT_APP_API_URL, REACT_APP_API_KEY } from "../env";
import Form from "./components/form";
import { VStack } from "@chakra-ui/react";
import { data as citiesData } from "./assets/data/data";

export default function App() {
  const [lat, setLat] = useState("26.9124");
  const [long, setLong] = useState("75.7873");
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    const city = e.target.value;
    console.log(city);
    citiesData.map((d) => {
      if (city=== d.name.toLowerCase() || city===d.name) {
        console.log("City found")
        setLat(d.lat);
        setLong(d.lon);
        console.log(lat,long)
      }
    });
  };

  const handleReload = () => {
    window.location.reload();
  };
 
  useEffect(() => {
    const fetchData = async () => {
      // navigator.geolocation.getCurrentPosition(function (position) {
      //   setLat(position.coords.latitude);
      //   setLong(position.coords.longitude);
      // });

      await fetch(
        `${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
<>
    { lat != undefined?(
    <VStack className="App min-h-screen bg-slate-900">
      <Form handleChange={handleChange}  />
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} handleReload={handleReload}/>
      ) : (
        <div></div>
      )}
    </VStack>):
    <Form handleChange={handleChange} />
      }
      </>
  );
}
