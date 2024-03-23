import s from "./weather_card.module.css"
import { useState, useEffect } from "react";
import { BsThermometerHalf } from 'react-icons/bs';
import { WiHumidity } from 'react-icons/wi'

function Widget() {

    const [date, setDate] = useState(new Date());
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        const updateDate = () => {
          setDate(new Date());
        };
    
        const timer = setInterval(updateDate, 1000);
    
        const cleanUp = () => {
          clearInterval(timer);
        };
    
        return cleanUp;
      }, []);

      useEffect(()=>{
       
        const getWeatherData = async () => {
          const apiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
          const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=7bfbf96071e44a0ead3112950233008&q=6.8267181,79.8638752&aqi=no`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }
          );
          const data = await res.json();
          console.log(data);
          setWeatherData(data);
        };
    
        getWeatherData()

      }, []);
    

      return (
        <div>
          <h1 className= {s.widget_time}>
            {date.getHours() + ":" + date.getMinutes()}
          </h1>
          <h4 className= {s.widget_date}>{date.toDateString()}</h4>
          
          <div className={s.widget_weather}>

           <div className= {s.widget_temp}>
            <div className= {s.icon_bg}>
            
              <BsThermometerHalf className= {s.weather_icons} size='30px' color="white"/>

            </div>  
            <p className={s.widget_weather_temp}>Temperature</p>
            <p className={s.widget_weather_temp}>
              {!weatherData ? "Loading..." : weatherData.current.temp_c + "°C"} 
            </p>

           </div>

            <div className= {s.widget_temp}>
              <div className= {s.icon_bg}>
            
                <WiHumidity className= {s.weather_icons} size='30px' color="white"/>

              </div> 
              <p className={s.widget_weather_humidity}>Humidity</p>
              <p className={s.widget_weather_humidity}>
              {!weatherData ? "Loading..." : weatherData.current.humidity + "%"}
              </p>  
            </div>


          </div>
        </div>
      );
    }

export default Widget;
