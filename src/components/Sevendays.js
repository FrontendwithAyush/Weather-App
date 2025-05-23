import React from "react";

const Sevendays = (props) => {
  let {
    date,
    mintemp_c,
    maxtemp_c,
    sunset,
    sunrise,
    text,
    icon,
    maxwind_kph,
    avghumidity,
  } = props;

  return (
    <>
      <div className="first">
        <p>Date </p>
        <p>{date}</p>
      </div>
      <div className="second">
        <div className="" style={{ height: "100%", width: "45%" }}>
          <div className="" style={{ height: "75%", width: "100%" }}>
            <img
              src={icon}
              alt="..."
              style={{
                height: "100%",
                width: "40%",
              }}
            />
            <span className="span3">{maxtemp_c}°</span>
            <span>/{mintemp_c}°</span>
          </div>
          <div
            className="span2"
            style={{
              height: "25%",
              width: "100%",
            }}
          >
            <p>{text}</p>
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
            <p>Sunrise</p>
            <p>Sunset</p>
            <p>Humidity</p>
            <p>Maxwind</p>
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
              <strong>{sunrise}</strong>
            </p>
            <p>
              <strong>{sunset}</strong>
            </p>
            <p>
              <strong>{avghumidity}%</strong>
            </p>
            <p>
              <strong>{maxwind_kph}kph</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sevendays;
