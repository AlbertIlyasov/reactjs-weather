import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <div className="row justify-content-md-center">
      <div className="col-12 col-md-4">
        <input type="text" className="form-control" name="city" placeholder="City" />
      </div>
      <div className="col-12 col-md-4">
        <button className="btn btn-primary btn-block">Get the weather</button>
      </div>
    </div>
  </form>
);

export default Form;
