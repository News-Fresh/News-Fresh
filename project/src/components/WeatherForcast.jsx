import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import styled from 'styled-components';
import Icon from "../icons/logo.png";
import clouds from "../icons/clouds.png";
import clear from "../icons/clear.png";

export default function WeatherForecast(props) {
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
    };
    // forecastShow();
    //   });
    
const ForecastBox = styled.div`
position: absolute;
width: 85%;
height: 36%;
top: 55%;
left : 6%;
padding : 8px;
margin:10px;
/* Color/White/WHITE */
border-radius: 27.2478px;
background: linear-gradient(45deg, #9DCFFF, #3DB7CC);
@media screen and (max-width: 1200px) {
  left: 5%;
}
@media screen and (max-width: 600px) {
  left: 1%;
}
`
const Box1 = styled.div`
position: absolute;
width: 25%;
height: 80%;
top: 1%
left : 6%;
margin:10px;
/* Color/White/WHITE */
border-radius: 10px;
background: linear-gradient(45deg, #008299, #3DB7CC);
@media screen and (max-width: 1200px) {
  left: 2%;
}
@media screen and (max-width: 600px) {
  left: 1%;
}
`
const Box2 = styled.div`
position: absolute;
width: 25%;
height: 80%;
top: 5%
left : 32%;
margin:10px;
/* Color/White/WHITE */
border-radius: 10px;
background: linear-gradient(45deg, #008299, #3DB7CC);
@media screen and (max-width: 1200px) {
  left: 35%;
}
@media screen and (max-width: 600px) {
  left: 32%;
}
`
const Box3 = styled.div`
position: absolute;
width: 25%;
height: 80%;
top: 1%
left : 40%;
margin:10px;
/* Color/White/WHITE */
border-radius: 10px;
background: linear-gradient(45deg, #008299, #3DB7CC);
@media screen and (max-width: 1200px) {
  left: 68%;
}
@media screen and (max-width: 600px) {
  left: 63%;
}
`
const Date = styled.p`
line-height:1px;
text-align:center;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 10px;

color: white;
  @media screen and (max-width: 600px) {
    font-size:10px;
  }
`
const Time = styled.div`
text-align:center;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height:1px;

letter-spacing: -0.512518px;
color: white;
  @media screen and (max-width: 1200px) {
    font-size:15px;
    line-height:15px;
    @media screen and (max-width: 600px) {
    line-height:3px;
    font-size:10px;
  }
`
const Temperature = styled.div`
text-align:center;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 45px;
line-height: 28px;

color: white;
@media screen and (max-width: 1200px) {
    font-size: 20px;
    line-height: 20px;
}
@media screen and (max-width: 600px) {
    font-size: 15px;
    line-height: 25px;
  }
`
const Weather = styled.div`
text-align:center;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 20px;

color: white;
@media screen and (max-width: 1200px) {
    font-size:10px;
    line-height: 20px;
}
@media screen and (max-width: 600px) {
      line-height: 20px;
    font-size:10px;
  }
`
const Weatherimg = styled.img`
position: absolute;
width:50%;
left: 25%;
top: 55%;
padding-top : 10px;
`
    return(
        <>
            <ForecastBox>
                {Object.keys(result).length !== 0 && (
                    <div>
                        <Box1>
                            <Date className="date">{
                            result.data.list[3].dt_txt[5]
                            +result.data.list[3].dt_txt[6]
                            +'/'
                            +result.data.list[3].dt_txt[8]
                            +result.data.list[3].dt_txt[9]
                            }</Date>
                            <hr />
                            <Time>
                            {result.data.list[3].dt_txt[11]
                            +result.data.list[3].dt_txt[12]
                            +'시'}
                            </Time>
                            <Weather className="sky">{result.data.list[3].weather[0].main}</Weather>
                            <Temperature className="temperature">{Math.round(((result.data.list[3].main.temp - 273.15) * 10))/10}℃</Temperature>
                            <Weatherimg src={
                                result.data.list[3].weather[0].main = 'clouds' ? clouds : 
                                result.data.list[3].weather[0].main = 'clear' ? clear : 'clear'
                                } alt="날씨" />
                        </Box1>
                        <Box2>
                            <Date className="date">{
                            result.data.list[4].dt_txt[5]
                            +result.data.list[4].dt_txt[6]
                            +'/'
                            +result.data.list[4].dt_txt[8]
                            +result.data.list[4].dt_txt[9]
                            }</Date>
                            <hr />
                            <Time>
                            {result.data.list[4].dt_txt[11]
                            +result.data.list[4].dt_txt[12]
                            +'시'}
                            </Time>
                            <Weather className="sky">{result.data.list[4].weather[0].main}</Weather>
                            <Temperature className="temperature">{Math.round(((result.data.list[4].main.temp - 273.15) * 10))/10}℃</Temperature>
                            <Weatherimg src={
                                result.data.list[4].weather[0].main = 'clouds' ? clouds : 
                                result.data.list[4].weather[0].main = 'clear' ? clear : 'clear'
                                } alt="날씨" />
                        </Box2>
                        <Box3>
                            <Date className="date">{
                            result.data.list[5].dt_txt[5]
                            +result.data.list[5].dt_txt[6]
                            +'/'
                            +result.data.list[5].dt_txt[8]
                            +result.data.list[5].dt_txt[9]
                            }</Date>
                            <hr />
                            <Time>
                            {result.data.list[5].dt_txt[11]
                            +result.data.list[5].dt_txt[12]
                            +'시'}
                            </Time>
                            <Weather className="sky">{result.data.list[5].weather[0].main}</Weather>
                            <Temperature className="temperature">{Math.round(((result.data.list[5].main.temp - 273.15) * 10))/10}℃</Temperature>
                            <Weatherimg src={
                                result.data.list[5].weather[0].main = 'clouds' ? clouds : 
                                result.data.list[5].weather[0].main = 'clear' ? clear : 'clear'
                                } alt="날씨" />
                        </Box3>
                    
                  </div>
                )}
            </ForecastBox>
            <button onClick={forecastShow}>예보</button>
        </>
    )
}