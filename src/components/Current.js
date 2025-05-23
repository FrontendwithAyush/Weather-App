import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const Current = (props) => {
  const setWeatherBackground = (condition) => {
    document.body.className = ""; // Clear previous class

    if (condition.includes("Sunny")) {
      document.body.classList.add("sunny");
    } else if (condition.includes("Rain") || condition.includes("Shower")) {
      document.body.classList.add("rainy");
    } else if (condition.includes("Cloud")) {
      document.body.classList.add("cloudy");
    } else if (condition.includes("Clear")) {
      document.body.classList.add("clear");
    } else {
      document.body.classList.add("default");
    }
  };

  const [Time, setTime] = useState("");
  const [text, settext] = useState("");
  const [location, setLocation] = useState("");
  const [Image, setImage] = useState("a");
  const [Current, setCurrent] = useState("");
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const API_KEY = process.env.REACT_APP_w_API_KEY;

  const fetchData = async () => {
    try {
      props.setProgress(10);
      const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${props.city}&aqi=no`;
      setLoading(true);
      props.setProgress(30);
      let data = await fetch(url);
      props.setProgress(50);
      let parsedData = await data.json();
      props.setProgress(70);
      setTime(parsedData.location.localtime);
      setLocation(parsedData.location.name);
      setImage(parsedData.current.condition);
      settext(parsedData.current.condition.text);
      setCurrent(parsedData.current);
      setLoading(false);
      props.setProgress(100);
      setWeatherBackground(text);
    } catch (error) {
      navigate("/");
      setTimeout(() => {
        alert("City not found");
      }, 2000);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {Loading && <Spinner />}
      <div className="weather-card">
        <div className="container ">
          <div className="first">
            <p>
              CURRENT WEATHER
              <br /> <small>{location}</small>
            </p>
            <p>{Time}</p>
          </div>
          <div className="second">
            <div className="" style={{ height: "100%", width: "45%" }}>
              <div className="" style={{ height: "75%", width: "100%" }}>
                <img
                  src={Image.icon}
                  alt="..."
                  style={{
                    height: "100%",
                    width: "40%",
                  }}
                />
                <span className="span1">{Current.temp_c}°</span>
                <span>C</span>
              </div>
              <div
                className=""
                style={{
                  height: "25%",
                  width: "100%",
                  fontSize: "2rem",
                  fontWeight: "500",
                }}
              >
                <p>{Image.text}</p>
              </div>
            </div>
            <div
              className=""
              style={{
                height: "100%",
                width: "45%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                className=""
                style={{
                  height: "100%",
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "start",
                }}
              >
                <p>Feels like</p>
                <p>Wind</p>
                <p>Humidity</p>
                <p>Temp_f</p>
              </div>
              <div
                className=""
                style={{
                  height: "100%",
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "end",
                }}
              >
                <p>
                  <strong>{Current.feelslike_c}°C</strong>
                </p>
                <p>
                  <strong>{Current.wind_kph}kph</strong>
                </p>
                <p>
                  <strong>{Current.humidity}%</strong>
                </p>
                <p>
                  <strong>{Current.temp_f}°F</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Current;
