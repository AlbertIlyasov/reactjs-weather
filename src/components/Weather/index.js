import React from "react";

const Weather = props => (
  <div className="row justify-content-center weather_info">
    {props.city &&
      <div>
        <div>Location: {props.city}, {props.country}</div>
        <div>Temperature: {props.temp} &#8451;</div>
      </div>
    }
    <div>{props.error}</div>
  </div>
);

export default Weather;
