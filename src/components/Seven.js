import React, { useEffect, useState } from "react";
import Sevendays from "./Sevendays";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const Seven = (props) => {
  const [Articles, setAllArticles] = useState([]);
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const API_KEY = process.env.REACT_APP_w_API_KEY;

  const SevenDays = async () => {
    try {
      props.setProgress(10);
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${props.city}&days=7&aqi=no&alerts=no`;
      setLoading(true);
      props.setProgress(40);
      let data = await fetch(url);
      props.setProgress(70);
      let parsedData = await data.json();
      setAllArticles(parsedData.forecast.forecastday);
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
    SevenDays();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {Loading && <Spinner />}
      <div className="container">
        {Articles.map((element) => {
          return (
            <div key={element.date_epoch}>
              <Sevendays
                date={element.date}
                mintemp_c={element.day.mintemp_c}
                maxtemp_c={element.day.maxtemp_c}
                avghumidity={element.day.avghumidity}
                maxwind_kph={element.day.maxwind_kph}
                sunset={element.astro.sunset}
                sunrise={element.astro.sunrise}
                text={element.day.condition.text}
                icon={element.day.condition.icon}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Seven;
