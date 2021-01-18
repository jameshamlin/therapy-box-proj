import React, {useState} from 'react';
import Sun               from './img/Sun_icon.png'
import Rain              from './img/Rain_icon.png'
import Cloud             from './img/Clouds_icon.png'


const Weather = (props) => {

    const [weatherTemp, setWeatherTemp]   = useState('');
    const [weatherImg, setWeatherImg]   = useState('');
    const [weatherPlace, setWeatherPlace] = useState('');

    const retrieveWeather = () => {

        const locSuccess = (position) => {
            console.log("Location", position);

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const key = 'd0a10211ea3d36b0a6423a104782130e';

            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

            fetch(url,{
                method: 'GET',
            })
                .then(response => response.json())
                .then( weatherResponse => {
                    console.log("weather", weatherResponse);

                    setWeatherTemp(Math.round(weatherResponse.main.temp - 273.15));
                    setWeatherPlace(weatherResponse.name);

                    const iconCode = weatherResponse.weather[0].icon;
                    let img;
                    switch (iconCode){
                        case '01d':
                            img = Sun;
                            break;
                        case '09d':
                        case '10d':
                        case '11d':
                            img = Rain;
                            break;
                        case '03d':
                        case '04d':
                        case '03n':
                        case '04n':
                        default:
                            img = Cloud;
                    }
                    setWeatherImg(img);


                }).catch(reason => console.log( reason ))
        }

        const error = () => {
            console.log("failed to get location");
        }

        navigator.geolocation.getCurrentPosition(locSuccess, error);
    }

    React.useEffect( retrieveWeather, [] );

    return (

        <>
            <img src={weatherImg} style={{maxWidth: '40%', boxSizing: 'border-box', float: 'left'}} />
            <div style={{fontWeight: 'bold'}}><div>{weatherTemp}</div><div>degrees C</div></div>
            <div style={{clear: 'left', paddingTop: '20px', fontWeight: 'bold', fontSize: '1.5rem'}}>{weatherPlace}</div>
        </>
    )
}

export default Weather;