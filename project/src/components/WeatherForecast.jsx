import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import styled from 'styled-components';
import Icon from "../icons/logo.png";
import clouds from "../icons/clouds.png";
import clear from "../icons/clear.png";

const ForecastBox = styled.div`
position: absolute;
width: 80%;
height: 35%;
top: 55%;
left : 6%;
padding : 8px;
margin:10px;
/* Color/White/WHITE */
border-radius: 27.2478px;
background: linear-gradient(45deg, #9DCFFF, #3DB7CC);
@media screen and (max-width: 1210px) {
  left: 5%;
  top: 45%;
}
@media screen and (max-width: 768px) {
  left: 3%;
}
`
const Box1 = styled.div`
position: absolute;
width: 25%;
height: 70%;
top: 8%;
left : 6%;
margin:10px;
/* Color/White/WHITE */
border-radius: 10px;
background: linear-gradient(45deg, #008299, #3DB7CC);
@media screen and (max-width: 1210px) {
  left: 2%;
  height: 65%;
  top:12%;
}
@media screen and (max-width: 768px) {
  left: 3%;
}
`

const Box2 = styled.div`
position: absolute;
width: 25%;
height: 70%;
top: 8%;
left : 37%;
margin : 10px;
/* Color/White/WHITE */
border-radius: 10px;
background: linear-gradient(45deg, #008299, #3DB7CC);
@media screen and (max-width: 1210px) {
  left: 35%;
  height: 65%;
  top:12%;
}
@media screen and (max-width: 768px) {
  left: 35%;
}
`

const Box3 = styled.div`
position: absolute;
width: 25%;
height: 70%;
top: 8%;
left : 68%;
margin:10px;
/* Color/White/WHITE */
border-radius: 10px;
background: linear-gradient(45deg, #008299, #3DB7CC);
@media screen and (max-width: 1210px) {
  left: 68%;
  height: 65%;
  top:12%;
}
@media screen and (max-width: 768px) {
  left: 65%;
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
  @media screen and (max-width: 768px) {
    font-size:10px;
  }
`
const Time = styled.div`
text-align:center;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height:15px;
position : absolute;
top: 23%;
left : 40%;
letter-spacing: -0.512518px;
color: white;
  @media screen and (max-width: 1210px) {
    font-size:15px;
    line-height:15px;
    left:34%;
  }
    @media screen and (max-width: 768px) {
    line-height:3px;
    font-size:10px;
  }
`
const Temperature = styled.div`
text-align:center;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 23px;
line-height: 28px;
position : absolute;
top: 45%;
left : 30%;
color: white;
@media screen and (max-width: 1210px) {
    font-size: 20px;
    line-height: 20px;
    left:25%;
}
@media screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 25px;
  }
`
const Weather = styled.div`
text-align:center;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 40px;
position : absolute;
top: 25%;
left : 40%;
color: white;
@media screen and (max-width: 1210px) {
    font-size:10px;
    line-height: 20px;
    top: 30%;
    left: 32%;
}
@media screen and (max-width: 768px) {
      line-height: 20px;
    font-size:10px;
  }
`
const Weatherimg = styled.img`
position: absolute;
height:30%;
width: 50%;
left: 23%;
justify-content: center;
top: 60%;
padding-top : 10px;
`

const ForecastBtn = styled.button`
  
  flex-direction: row;
  position: absolute;
  width: 50px;
  height: 30px;
  right: 5%;
  top: 30px;
  color: white;
  font-weight: 700;
  font-family: 'Poppins';
  font-style: normal;
  background: #c4dea3;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 1210px) {
    top: 28px;
  }
  @media screen and (max-width: 768px) {
    right: 5%;
    top: 26px;
  }
`;
export default function WeatherForecast(props) {
  const API_KEY =
  // "ab9fd86fdb0d2bd4968a55bfa83cf03c"
  "c8fffee56b961e5df0d6af641bd1a6e3"
  // "242b309a31182dc5c37381b6642b796c"
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=seoul&appid=${API_KEY}`;
  const [result, setResult] = useState({});
  const [weather1, setWeather1] = useState();
  const [weather2, setWeather2] = useState();
  const [weather3, setWeather3] = useState();
  const [icon1, setIcon1] = useState();
  const [icon2, setIcon2] = useState();
  const [icon3, setIcon3] = useState();
  
  let iconurl1 = "http://openweathermap.org/img/w/" + icon1 + ".png";
  let iconurl2 = "http://openweathermap.org/img/w/" + icon2 + ".png";
  let iconurl3 = "http://openweathermap.org/img/w/" + icon3 + ".png";
  
  useEffect(() => {
      
    const forecastShow = async (Seoul)=> {
        const data = await axios({
            method : 'get',
            url : url
        })
        setResult(data);
        console.log('예보',data);
        setWeather1(data.data.list[3].weather[0].main);
        setWeather2(data.data.list[4].weather[0].main);
        setWeather3(data.data.list[5].weather[0].main);
        setIcon1(data.data.list[3].weather[0].icon);
        setIcon2(data.data.list[4].weather[0].icon);
        setIcon3(data.data.list[5].weather[0].icon);
        // setIcon(data.data.weather[0].icon);
    };
    forecastShow();
      }, []);
    
    return(
        <>
        {Object.keys(result).length !== 0 && (
                  <ForecastBox>
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
                            <Weather className="sky">
                              {/* {result.data.list[3].weather[0].main} */}
                              {weather1}
                              </Weather>
                            <Temperature className="temperature">{Math.round(((result.data.list[3].main.temp - 273.15) * 10))/10}℃</Temperature>
                            <Weatherimg src={
                                // result.data.list[3].weather[0].main = 'clouds' ? clouds : 
                                // result.data.list[3].weather[0].main = 'clear' ? clear : 'clear'
                                iconurl1
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
                            <Weather className="sky">
                              {/* {result.data.list[4].weather[0].main} */}
                              {weather2}
                              </Weather>
                            <Temperature className="temperature">{Math.round(((result.data.list[4].main.temp - 273.15) * 10))/10}℃</Temperature>
                            <Weatherimg src={
                                // result.data.list[4].weather[0].main = 'clouds' ? clouds : 
                                // result.data.list[4].weather[0].main = 'clear' ? clear : 'clear'
                                iconurl2
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
                            <Weather className="sky">
                              {/* {result.data.list[5].weather[0].main} */}
                              {weather3}
                              </Weather>
                            <Temperature className="temperature">{Math.round(((result.data.list[5].main.temp - 273.15) * 10))/10}℃</Temperature>
                            <Weatherimg src={
                                // result.data.list[5].weather[0].main = 'clouds' ? clouds : 
                                // result.data.list[5].weather[0].main = 'clear' ? clear : 'clear'
                                iconurl3
                                } alt="날씨" />
                        </Box3>
                  </ForecastBox>
                )}
            {/* <ForecastBtn onClick={forecastShow}>예보</ForecastBtn> */}
        </>
    )
}