import React from "react";
import About from "./components/About/";
import Form from "./components/Form/";
import Weather from "./components/Weather/";

const API_KEY = "eaa02f9d54cb6e6751ed7e106190e6ea";

class App extends React.Component {

  state = {
    country: undefined,
    city: undefined,
    temp: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();

      this.setState({
        country: undefined,
        city: undefined,
        temp: undefined,
        error: undefined,
      });

    let city = e.target.elements.city.value.replace("-", " ").trim();
    if (!city) {
      this.setState({
        error: "Please type the city. Examples: Saint Petersburg or Rome, IT",
      });
      return;
    }

    let data = undefined;
    let cityEncoded = encodeURIComponent(city);
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityEncoded}&appid=${API_KEY}&units=metric`;
    let dataEncoded = await fetch(url);
    data = await dataEncoded.json();

    if (200 != data.cod) {
      this.setState({
        error: data.message,
      });
      return;
    }

    this.setState({
      country: data.sys.country,
      city: data.name,
      temp: data.main.temp,
    });
  }

  render() {
    return (
      <section class="jumbotron text-center">
        <div class="container">
          <About />
          <Form getWeather={this.getWeather} />
          <Weather
            country={this.state.country}
            city={this.state.city}
            temp={this.state.temp}
            error={this.state.error}
          />
        </div>
      </section>
    );
  }
}

export default App;
