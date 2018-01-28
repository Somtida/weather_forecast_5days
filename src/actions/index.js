import {KEY_WEATHER} from 'babel-dotenv';
import axios from 'axios';

const API_KEY = KEY_WEATHER;

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`


export const FETCH_WEATHER = 'FETCH_WEATHER';



export function fetchWeatherAction(city) {
  let location = city.split(',');
  const url = `${ROOT_URL}&q=${location[0]},${location[1]}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
