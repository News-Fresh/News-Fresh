import React from "react";
import styled from 'styled-components';
import Icon from "../icons/logo.png";

export default function Weather() {
const WeatherBox = styled.div`
position: absolute;
width: 43%;
height: 50%;
right: 50px;
top: 45%;

/* Color/White/WHITE */
border-radius: 27.2478px;
background-color: #e6ecf2;
@media screen and (max-width: 1210px) {
    left: 170px;
    top: 350px;
    width: 60%;
  }
  @media screen and (max-width: 600px) {
    left: 20%;
    top: 300px;
    width: 70%;
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
            <WeatherBox>
                <LogoIcon src={Icon} alt="icon" />
                <WeatherText>Weather</WeatherText>
                <p id="temperature"></p>
            </WeatherBox>
        </>
    )
}