import React from "react";

const Daily = (props) => {
  let {
    time,
    imageUrl,
    temp_c,
    text,
    wind_kph,
    feelslike_c,
    humidity,
    temp_f,
  } = props;

  return (
    <>
      <div className="first">
        <p>Time </p>
        <p>{time}</p>
      </div>
      <div className="second">
        <div className="" style={{ height: "100%", width: "45%" }}>
          <div className="" style={{ height: "75%", width: "100%" }}>
            <img
              src={imageUrl}
              alt="..."
              style={{
                height: "100%",
                width: "40%",
              }}
            />
            <span className="span1">{temp_c}°</span>
            <span>C</span>
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
              <strong>{feelslike_c}°C</strong>
            </p>
            <p>
              <strong>{wind_kph}kph</strong>
            </p>
            <p>
              <strong>{humidity}%</strong>
            </p>
            <p>
              <strong>{temp_f}°F</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Daily;
