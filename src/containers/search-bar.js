import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherAction } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm : '',
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    event.preventDefault();
    this.setState({searchTerm: event.target.value})
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.searchTerm);
    this.setState({searchTerm: ''})
  }
  render() {
    return (
      <div>
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input type="text"
          className="form-control"
          id="search-input"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
          placeholder="City, Country  -  Get a 5 days forecast in your favorite place" />
        <div className="input-group-btn">
          <button type="submit" className="btn btn-default">Submit</button>
        </div>
      </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather: fetchWeatherAction}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
