'use strict'
// DOTENV (Read our Environment Variables) -- UpperCase
require('dotenv').config()
const express = require('express');
// CORS = Cross Origin Resource Sharing
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const server = express();
server.use( cors() );
server.get('/location', locationHandler);
function locationHandler (request, response) {
   let locationData= getLocation(request.query.data);
   response.status(200).json(locationData);
 };
 function getLocation(city){
let data = require('./data/geo.json');
  return new Location(city,data);
 }
 function Location (data) {
     this.search_query = city;
     this.formatted_query = geoData.results[0].formatted_address;
     this.latitude = geoData.results[0].geometry.location.lat;
     this.longitude = geoData.results[0].geometry.location.lng;
   }
 /////////////////////////////////////////////////////////
 function weatherHandler (request, response) {
   let weatehrData= getWeather(request.query.data);
   response.status(200).json(weatherData);
 };
 function getWeather(city){
   let data = require('./data/darksky.json');
   return data.daily.data.map ((day) => {
   return new Weather(day);
   });
    }
    function Weather (day) {
        this.forecast = day.summary;
        this.time = new Date (day.time*1000).toDateString();
    }