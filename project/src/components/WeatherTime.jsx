import React from "react";
import Clock from 'react-live-clock';
import styled from 'styled-components';

const Timer = styled.div`
position: absolute;
right: 22%;
top: 30%;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 28px;

color: white;
  @media screen and (max-width: 600px) {
    font-size:30px;
  }
  @media screen and (max-width: 600px) {
    font-size:20px;
  }
`
export default function WeatherTime() {
    
    return (
        <>
            <Timer>
                {<Clock format={`MM/DD`} ticking={true}/>}
            </Timer>
        </>
    );
  }
  