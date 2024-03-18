import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCloud,
  faDroplet as faHumidity,
  faSun as faSunRise,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { Button, HStack, Text, VStack } from "@chakra-ui/react";
library.add();
const Wheather = ({ weatherData, handleReload }) => {
  console.log("WeatherData : ", weatherData);
  return (
    <>
      <VStack
      className="w-full sm:max-w-screen-sm h-50 sm:min-h-screen text-white"
        padding={"1em"}
        bg={'#1F2544'}
        alignItems={"space-between"}
        justifyContent={"space-between"}
        borderRadius={"1.3em"}
      >
        <HStack
          flexDir={["column", "row"]}
          borderTopRadius={"1em"}
          bg={"#201658"}
          justifyContent={"space-between"}
        >
          <Button
            display={["none", "initial"]}
            className="button"
            onClick={handleReload}
          ></Button>
        </HStack>
        <VStack height={'50vh'}  color={'white'} alignItems={"center"}>
          <h1 className="header">
            {weatherData.weather[0].description
              .toLowerCase()
              .includes("cloud") ? (
              <FontAwesomeIcon icon={faCloud} />
            ) : weatherData.weather[0].description
                .toLowerCase()
                .includes("haze") ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7l-.7.7M8 12a4 4 0 1 1 8 0M3 16h18M3 20h18"
                />
              </svg>
            ) : weatherData.weather[0].description
                .toLowerCase()
                .includes("mist") ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 256 256"
              >
                <defs>
                  <linearGradient
                    id="logosMist0"
                    x1="253.534%"
                    x2="-6.886%"
                    y1="253.575%"
                    y2="-.904%"
                  >
                    <stop offset="0%" stop-color="#fff" />
                    <stop offset="100%" stop-color="#c2c1c1" />
                  </linearGradient>
                  <linearGradient
                    id="logosMist1"
                    x1="209.797%"
                    x2="-1.083%"
                    y1="223.263%"
                    y2="-3.113%"
                  >
                    <stop offset="0%" stop-color="#fff" />
                    <stop offset="100%" stop-color="#a2a2a1" />
                  </linearGradient>
                  <linearGradient
                    id="logosMist2"
                    x1="271.964%"
                    x2="7.716%"
                    y1="334.363%"
                    y2="-9.063%"
                  >
                    <stop offset="0%" stop-color="#fff" />
                    <stop offset="100%" stop-color="#b3b3b3" />
                  </linearGradient>
                </defs>
                <circle cx="128" cy="128" r="128" fill="#e9e9e9" />
                <path
                  fill="url(#logosMist0)"
                  d="M166.056 207.918c-74.05-6.013-37.626-10.137-144.322-32.129c29.38 22.68 77.144 78.862 144.322 32.129"
                />
                <path
                  fill="url(#logosMist1)"
                  d="M242.34 118.06c-70.27-13.917-139.167-61.852-211.5-46.389c-1.03.344-2.233.515-1.718 1.03c46.218 8.076 143.12 77.316 213.219 45.36"
                />
                <path
                  fill="url(#logosMist2)"
                  d="M223.098 183.692c-36.94-7.903-117.863-69.583-208.752-44.843c79.55 18.213 151.195 62.54 208.752 44.843"
                />
                <path
                  fill="#a4a4a4"
                  d="M235.297 81.808C194.234 51.569 142.69-3.067 95.613 47.274C153 54.318 160.558 63.768 235.297 81.808"
                />
                <path
                  fill="#121212"
                  d="M20.875 175.445c85.047.172 133.67-64.773 221.466-57.385c-70.1 35.909-155.834 103.775-221.466 57.385"
                />
                <path
                  fill="#171717"
                  d="M235.125 81.808c-85.734-6.873-130.406 62.368-221.466 57.385C48.193 123.558 150.078 31.64 235.125 81.808"
                />
                <path
                  fill="#212121"
                  d="M172.242 36.621c-49.139-1.718-99.136 41.922-143.463 36.253C60.736 53.459 120.01 4.492 172.242 36.62"
                />
                <path
                  fill="#010101"
                  d="M84.102 219.945c51.028-.172 93.81-45.015 140.027-36.253c-37.799 21.649-83.844 66.32-140.027 36.253"
                />
              </svg>
            ) : weatherData.weather[0].description
                .toLowerCase()
                .includes("smoke") ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 30 30"
              >
                <path
                  fill="currentColor"
                  d="M6.34 12.48c0-.94.3-1.78.89-2.52s1.34-1.21 2.25-1.41c.25-1.12.82-2.05 1.72-2.77s1.92-1.08 3.08-1.08c1.12 0 2.13.35 3.02 1.05c.89.7 1.46 1.6 1.73 2.69h.27c1.12 0 2.08.39 2.88 1.18c.79.78 1.19 1.74 1.19 2.85c0 .6-.12 1.17-.37 1.7s-.59.99-1.03 1.37v.03c0 .59-.19 1.12-.56 1.59c-.37.47-.84.76-1.4.89c-.14.62-.45 1.15-.91 1.58c-.46.43-1.01.7-1.63.8c.29.34.43.72.43 1.13c0 .48-.17.89-.51 1.24c-.34.34-.75.52-1.23.52s-.89-.17-1.23-.52c-.34-.34-.51-.76-.51-1.24c0-.19.03-.38.1-.57h-.1c-.58 0-1.08-.21-1.5-.63c-.42-.42-.63-.92-.63-1.5c0-.4.1-.76.3-1.07c-.52-.29-.89-.7-1.12-1.25h-1.28v-.01c-1.07-.07-1.98-.49-2.73-1.27s-1.12-1.7-1.12-2.78m1.4-.25c0 .8.28 1.48.84 2.04s1.24.84 2.03.84c.49 0 .95-.11 1.37-.34c.12.74.47 1.36 1.04 1.86s1.25.74 2.02.74c.87 0 1.61-.31 2.22-.92c.41.48.92.71 1.54.71c.57 0 1.05-.2 1.46-.6c.4-.4.6-.89.6-1.46c.4-.27.72-.61.95-1.04c.23-.42.35-.88.35-1.37c0-.79-.28-1.47-.85-2.02s-1.25-.83-2.05-.83c-.56 0-1.07.15-1.53.44c.06-.24.08-.51.08-.79c0-.96-.34-1.78-1.03-2.46c-.69-.68-1.52-1.01-2.49-1.01c-.94 0-1.75.33-2.43.97s-1.04 1.44-1.07 2.37h-.17c-.79 0-1.46.28-2.03.84s-.85 1.25-.85 2.03"
                />
              </svg>
            ) : weatherData.weather[0].description
                .toLowerCase()
                .includes("clear") ? (
              <FontAwesomeIcon
                style={{ width: "5em", height: "5em" }}
                icon={faSunRise}
              />
            ) : (
              <p>:)</p>
            )}
          </h1>

          <Text textAlign="center" fontSize={'x-large'}>
            {/* <FontAwesomeIcon icon={faTemperatureEmpty} /> */}
            {weatherData.main.temp} &deg;C{" "}
          </Text>
          <Text textAlign="center" fontSize={'x-large'}>{weatherData.weather[0].description}</Text>
          <h1 className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
              />
            </svg>{" "}
            {weatherData.name}, {weatherData.sys.country}&nbsp; &nbsp;{" "}
          </h1>
        </VStack>
        
        <HStack
          className="flex-container "
          flexDir={["column", "row"]}
          p={"0 20px"}
          fontSize={'x-large'}
          justifyContent={"space-between"}
        >
          <Text textAlign="center" 
          className="text"
          >
            {" "}
            <FontAwesomeIcon icon={faHumidity} /> Humidity:{" "}
            {weatherData.main.humidity}%
          </Text>
          <Text textAlign="center"
          className="text"
          >
            {moment().format("dddd")} ,{moment().format("LL")}
          </Text>
        </HStack>
        <HStack
          className="flex-container"
          flexDir={["column", "row"]}
          p={"0 20px"}
          justifyContent={"space-between"}
          fontSize={'x-large'}

        >
          <Text textAlign="center"
          className="text"
          >
            {" "}
            Sunrise :{" "}
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </Text>
          <Text textAlign="center"
          className="text"
          >
            Sunset :{" "}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </Text>
        </HStack>
      </VStack>
    </>
  );
};

export default Wheather;
