import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class weather extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const forecast = { humidity: [], temp: [], pressure: []}
    cityData.list.forEach(ele => {
      forecast.humidity.push(ele.main.humidity);
      forecast.temp.push(ele.main.temp * 9/5 - 459.67);
      forecast.pressure.push(ele.main.pressure);
    });
    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td>
          <Chart color="blue" data={forecast.temp} units="F" />
        </td>
        <td>
          <Chart color="orange" data={forecast.humidity} units="%" />
        </td>
        <td>
          <Chart color="green" data={forecast.pressure} units="hPa" />
        </td>

      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperture</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}



        </tbody>
      </table>
    );
  }
}

function mapDispatchToProps({weather}) {
  return {weather};
}


export default connect(mapDispatchToProps)(weather);
