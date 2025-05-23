import React, { useEffect, useState } from "react";
import Daily from "./Daily";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const Day = (props) => {
  const [articles, setArticles] = useState([]);
  const [time, settime] = useState("");
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const API_KEY = process.env.REACT_APP_w_API_KEY;

  const hourlyData = async () => {
    try {
      props.setProgress(10);
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${props.city}&days=1&aqi=no&alerts=no`;
      setLoading(true);
      props.setProgress(30);
      let data = await fetch(url);
      props.setProgress(40);
      let parsedData = await data.json();
      props.setProgress(60);
      setArticles(parsedData.forecast.forecastday[0].hour);
      settime(parsedData.location.localtime);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      navigate("/");
      setTimeout(() => {
        alert("City not found");
      }, 2000);
    }
  };

  useEffect(() => {
    hourlyData();
    // eslint-disable-next-line
  }, []);

  const currentTime = new Date(time);
  return (
    <>
      {Loading && <Spinner />}
      <div className="container">
        {articles
          .filter((element) => new Date(element.time) > currentTime)
          .map((element) => {
            return (
              <div key={element.time_epoch}>
                <Daily
                  time={element.time}
                  imageUrl={element.condition.icon}
                  temp_c={element.temp_c}
                  text={element.condition.text}
                  feelslike_c={element.feelslike_c}
                  wind_kph={element.wind_kph}
                  humidity={element.humidity}
                  temp_f={element.temp_f}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Day;
