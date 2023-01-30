import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import styled from 'styled-components';
import Icon from "../icons/logo.png";

export default function WeatherForecast() {
  const API_KEY = "ab9fd86fdb0d2bd4968a55bfa83cf03c"
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=seoul&appid=${API_KEY}`;
  const [result, setResult] = useState({});
  const [seoulforecast, setSeoulforecast] = useState({});
  
//   useEffect(() => {

    const forecastShow = async (Seoul)=> {
      const data = await axios({
        method : 'post',
        url : url
      })
      setResult(data);
      console.log('정답'+data.data.list[3].dt_txt);
      console.log(data.data.list[3].weather[0].main);
    };
    // forecastShow();
//   });

const ForecastBox = styled.div`
position: absolute;
width: 85%;
height: 36%;
top: 250px;
left : 6%;
padding : 8px;
margin:10px;
/* Color/White/WHITE */
border-radius: 27.2478px;
background: linear-gradient(45deg, #9DCFFF, #3DB7CC);
@media screen and (max-width: 1200px) {
  left: 5%;
  top: 300px;
}
@media screen and (max-width: 600px) {
  left: 1%;
  top: 220px;
}
`
const LogoIcon = styled.img`
position: absolute;
width: 33px;
height: 27px;
left: 68px;
top: 65px;
`
const WeatherText = styled.span`
position: absolute;
width: 311px;
height: 28px;
left: 120.49px;
top: calc(50% - 28px/2 - 288.81px);

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 17.9381px;
line-height: 28px;
/* or 157% */

letter-spacing: -0.512518px;

/* Black/B100 */

color: #171717;
@media screen and (max-width: 1210px) {
    left: -40px;
    top: 65px;
    width: 60%;
  }
  @media screen and (max-width: 600px) {
    left: 1%;
    top: 15px;
    width: 70%;
  }
`
    return(
        <>
            <ForecastBox>
                <button onClick={forecastShow}>hi</button>
                {Object.keys(result).length !== 0 && (
                  <div>
                    <div className="date">{
                    result.data.list[3].dt_txt[5]
                    +result.data.list[3].dt_txt[6]
                    +'/'
                    +result.data.list[3].dt_txt[8]
                    +result.data.list[3].dt_txt[9]
                    +' '
                    +result.data.list[3].dt_txt[11]
                    +result.data.list[3].dt_txt[12]
                    }</div>
                    <div className="temperature">{Math.round(((result.data.list[3].main.temp - 273.15) * 10))/10}℃</div>
                    <div className="sky">{result.data.list[3].weather[0].main}</div>
                    <div className="date">{
                    result.data.list[4].dt_txt[5]
                    +result.data.list[4].dt_txt[6]
                    +'/'
                    +result.data.list[4].dt_txt[8]
                    +result.data.list[4].dt_txt[9]
                    +' '
                    +result.data.list[4].dt_txt[11]
                    +result.data.list[4].dt_txt[12]
                    }</div>
                    <div className="temperature">{Math.round(((result.data.list[4].main.temp - 273.15) * 10))/10}℃</div>
                    <div className="sky">{result.data.list[4].weather[0].main}</div>
                    <div className="date">{
                    result.data.list[5].dt_txt[5]
                    +result.data.list[5].dt_txt[6]
                    +'/'
                    +result.data.list[5].dt_txt[8]
                    +result.data.list[5].dt_txt[9]
                    +' '
                    +result.data.list[5].dt_txt[11]
                    +result.data.list[5].dt_txt[12]
                    }</div>
                    <div className="temperature">{Math.round(((result.data.list[5].main.temp - 273.15) * 10))/10}℃</div>
                    <div className="sky">{result.data.list[5].weather[0].main}</div>
                  </div>
                )}
            </ForecastBox>
        </>
    )
}