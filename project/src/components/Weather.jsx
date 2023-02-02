import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Icon from "../icons/logo.png";
import clear from "../icons/clear.png";
import WeatherTime from "./WeatherTime";
import WeatherForecast from "./WeatherForecast";

const WeatherBox = styled.div`
  // position: absolute;
  width: 43%;
  // height:750px;
  // right: 50px;
  // top: 300px;

  // /* Color/White/WHITE */
  // border-radius: 27.2478px;
  background-color: #fffdf4;
  position: absolute;
  margin: auto;
  padding: auto;
  left: 10%;
  top: 35%;
  border-radius: 4%;
  // max-width: 40%;
  // min-width: 40%;
  max-height: 49%;
  min-height: 49%;
  overflow: scroll;
  overflow-y: auto;
  @media screen and (max-width: 1210px) {
    left: 30%;
    width: 45%;
    top: 750px;
  }
  @media screen and (max-width: 768px) {
    width: 20rem;
    left: 10%;
    top: 650px;
    height: 450px;
  }
`;
const Box = styled.div`
  position: absolute;
  width: 80%;
  height: 30%;
  top: 70px;
  left: 6%;
  padding: 8px;
  margin: 10px;
  /* Color/White/WHITE */
  border-radius: 27.2478px;
  background: linear-gradient(45deg, #008299, #3db7cc);
  @media screen and (max-width: 1210px) {
    left: 4%;
  }
  @media screen and (max-width: 768px) {
    left: 3%;
  }
`;
const LogoIcon = styled.img`
  position: absolute;
  width: 33px;
  height: 33px;
  left: 20px;
  top: 25px;
  @media screen and (max-width: 768px) {
    left: 20px;
  }
`;
const WeatherText = styled.span`
  position: absolute;
  width: 311px;
  height: 28px;
  left: 55px;
  top: 30px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 17.9381px;
  line-height: 28px;
  /* or 157% */

  letter-spacing: -0.512518px;

  /* Black/B100 */

  color: #171717;
  @media screen and (max-width: 768px) {
    left: 55px;
    top: 26px;
    font-size: 15px;
  }
`;
const City = styled.span`
  line-height: 20px;
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;

  letter-spacing: -0.512518px;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
const WeatherStatus = styled.div`
  position: absolute;
  right: 25%;
  top: 55%;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 28px;

  color: white;
  @media screen and (max-width: 1210px) {
    font-size: 25px;
  }
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
const Temperature = styled.div`
  position: absolute;
  right: 22%;
  top: 75%;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 28px;

  color: white;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
const Weatherimg = styled.img`
  position: absolute;
  height: 50%;
  left: 15%;
  top: 25%;
  padding-top: 10px;
  border-radius: 10px;
  @media screen and (max-width: 1210px) {
    top: 25%;
    width: 15%;
    bottom: 10%;
  }
  @media screen and (max-width: 768px) {
    top: 30%;
    width: 20%;
  }
`;

const WeatherBtn = styled.button`
  
  flex-direction: row;
  position: absolute;
  width: 50px;
  height: 30px;
  right: 15%;
  top: 30px;
  color: white;
  font-weight: 700;
  font-family: 'Poppins';
  font-style: normal;
  z-index: 1;
  background: #c4dea3;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 1210px) {
    right: 21%;
    top: 28px;
  }
  @media screen and (max-width: 768px) {
    right: 21%;
    top: 26px;
  }
`;

export default function Weather() {
  const API_KEY = "4281729cba61323b40e791c6036334ed";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}`;
  const [result, setResult] = useState({});
  const [seoultemp, setSeoultemp] = useState({});

  // useEffect(() => {

  const weatherShow = async (Seoul) => {
    const data = await axios({
      method: "post",
      url: url,
    });
    setResult(data);
    console.log(data);
  };
  // weatherShow();
  // });

  return (
    <>
      <WeatherBox>
        <LogoIcon src={Icon} alt="icon" />
        <WeatherText>Today Weather</WeatherText>
        {Object.keys(result).length !== 0 && (
          <Box>
            <City className="city">Seoul Weather Report</City>
            <hr />
            <WeatherTime />
            <WeatherStatus className="sky">
              {result.data.weather[0].main}
            </WeatherStatus>
            <Temperature className="temperature">
              {Math.round((result.data.main.temp - 273.15) * 10) / 10}℃
            </Temperature>
            <Weatherimg
              src={(result.data.weather[0].main = "clear" ? clear : "bad")}
              alt=""
            />
          </Box>
        )}
        <WeatherForecast />
        <WeatherBtn onClick={weatherShow}>Today</WeatherBtn>
      </WeatherBox>
    </>
  );
}
