import React, { Component } from 'react';
import { connect } from 'react-redux';

class weather extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    return (
      <tr key={cityName}>
        <td>{cityName}</td>
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
