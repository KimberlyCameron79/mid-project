import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

export default function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=ff5294d1179817dddf81a87dcb30cf37`

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
  }
}
      return (
        <div className="app">
          <div className="search">
            <input 
            value={location}
            onChange={e => setLocation(e.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text" />
          </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            <h1>65°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
          <div className="bottom">
            <div className="feels">
              <p className="bold">65°F</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className="bold">20%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className="bold">12 MPH</p>
              <p>Wind Speed</p>
            </div>



          </div>
        </div>
      </div>
    </div>

  );
  }