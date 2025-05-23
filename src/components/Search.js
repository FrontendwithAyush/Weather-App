import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ setCity }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const API_KEY = process.env.REACT_APP_w_API_KEY;

  const detectLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        fetchWeatherByCoords(lat, lon);
      },
      () => {
        alert("Unable to retrieve your location please enter manually");
      }
    );
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}`;
      const res = await fetch(url);
      const data = await res.json();
      setCity(data.location.name); // update state here
      navigate("/current");
    } catch (error) {
      alert(" please enter manually");
    }
  };

  const handleSubmit = () => {
    setCity(input);
    navigate("/current");
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div
          className="card p-4 shadow p-3 mb-5 bg-body-tertiary rounded "
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <h2 className="text-center mb-4">Weather Finder</h2>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter city name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-primary w-100" onClick={handleSubmit}>
            Get Weather
          </button>
          <button
            className="btn btn-primary w-100 my-2"
            onClick={detectLocation}
          >
            Use My Location
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
