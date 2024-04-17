import React, { useState } from 'react';
import './WeatherApp.css'
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.jpeg"
import rain_icon from "../Assets/rain.png"
import snow_icon from "../Assets/snow.png"
import humidity_icon from "../Assets/humidity.png"
import wind_icon from "../Assets/wind.png"
const WeatherApp = () => {
    let apiKey = '8e410a81b086a99042c432c6676164c4';
    const [wicon,setWicon]=useState(cloud_icon);
    
    const search=async()=>{
    const element=document.getElementsByClassName("cityInput")
    if(element[0].value===""){
        return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${apiKey}&units=metric`;
    let response= await fetch(url);
    let data= await response.json();
    const humidity=document.getElementsByClassName("humidity-percent");
    const wind=document.getElementsByClassName("wind-rate");
    const temperature=document.getElementsByClassName("weather_temp");
    const location=document.getElementsByClassName("weather-location"); 
    humidity[0].innerHTML=data.main.humidity+" %";
    temperature[0].innerHTML = Math.floor(data.main.temp)+" ° c";
    wind[0].innerHTML= data.wind.speed+" km/h";
    location[0].innerHTML=data.name;

    if(data.weather[0].icon==="01d"|| data.weather[0].icon==="01n"){
        setWicon(clear_icon)
    }
    else if (data.weather[0].icon==="02d"|| data.weather[0].icon==="02n") {
        setWicon(cloud_icon);
    }else if (data.weather[0].icon==="03d"|| data.weather[0].icon==="03n") {
        setWicon(drizzle_icon);
    }
    else if (data.weather[0].icon==="09d"|| data.weather[0].icon==="09n") {
        setWicon(rain_icon);
    }
    else if (data.weather[0].icon==="10d"|| data.weather[0].icon==="10n") {
        setWicon(rain_icon);
    }
    else if (data.weather[0].icon==="13d"|| data.weather[0].icon==="13n") {
        setWicon(snow_icon);
    }
    else{
        setWicon(clear_icon)
    }
    }
    return (
        <div className='container'>
            <h1>Appuyer sur l'icon search </h1>
        <div className='top-bar'>
         <input type="text" className='cityInput' placeholder='Seacrch'/> 
         <div className="search-icon" onClick={()=>{search()}}>
            <img src={search_icon} alt="" />
            </div>  
        </div>
        <div className="weather-image">
        <img src={wicon} alt="" />
        </div>
        <div className="weather_temp">22°c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
             <img src={humidity_icon} alt="" className='icon' />
             <div className="data">
                <div className="humidity-percent">
                 64%   
                </div>
                <div className="text">humidity</div>
                </div>   
            </div><div className="element">
             <img src={wind_icon} alt="" className='icon' />
             <div className="data">
                <div className="wind-rate">
                 18 km/h 
                </div>
                <div className="text">wind speed</div>
                <button><a href="https://5dl8s5.csb.app/">return </a> </button>
                </div>   
            </div>
        </div>
        </div>
    );
}

export default WeatherApp;
