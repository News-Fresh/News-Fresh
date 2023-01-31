import React, { useState } from "react";
import styled from 'styled-components';
import apple from '../icons/apple.png';
import grape from '../icons/grape.png';
import watermelon from '../icons/watermelon.png';
import pineapple from '../icons/pineapple.png';
import Weather from "./Weather";
import MainNews from "./MainNews";
import Views from "./Views";


const Menu = styled.div`
    background-color : #C4DEA3;
    position: fixed;
    width: 135px;
    height: 100%;
    left: 0px;
    top: 0px;
    z-index:1;
    @media screen and (max-width: 1210px) {
        width:100%;
        height : 60px;
    }
    `
const BarStyle = styled.label`
    position: fixed;
    width: 36.33px;
    height: 28.37px;
    left: 50px;
    top: 88px;
    cursor : pointer;
    z-index: 2;
    @media screen and (max-width: 1210px) {
        left: 0px;
    }
    `
const Bar1 = styled.span`
    width: 100%;
    height: 20%;
    border-radius:30px;
    background: white;
    position: absolute;
    @media screen and (max-width: 1210px) {
        width: 20px;
        background: black;
        display:none;
    }
`
const Bar2 = styled.span`
    width: 100%;
    height: 20%;
    border-radius:30px;
    background: white;
    position: absolute;
    top: 15px;
    @media screen and (max-width: 1210px) {
        width: 20px;
        background: black;
        display:none;
    }
`
const AppleIcon = styled.img`
    position: absolute;
    width: 50px;
    height: 50px;
    left: 45px;
    top: 256px;
    cursor : pointer;
    @media screen and (max-width: 1210px) {
        width: 35px;
        height: 35px;
        left: 15%;
        top: 12.5px ;
    }
`
const GrapeIcon = styled.img`
    position: absolute;
    width: 50px;
    height: 50px;
    left: 45px;
    top: 383px;
    cursor : pointer;
    @media screen and (max-width: 1210px) {
        width: 35px;
        height: 35px;
        left: 35%;
        top: 12.5px ;
    }
`
const WatermelonIcon = styled.img`
    position: absolute;
    width: 50px;
    height: 50px;
    left: 45px;
    top: 510px;
    cursor : pointer;
    @media screen and (max-width: 1210px) {
        width: 35px;
        height: 35px;
        left: 55%;
        top: 12.5px ;
    }
`
const PineappleIcon = styled.img`
    position: absolute;
    width: 50px;
    height: 50px;
    left: 45px;
    top: 637px;
    cursor : pointer;
    @media screen and (max-width: 1210px) {
        width: 35px;
        height: 35px;
        left: 75%;
        top: 12.5px ;
    }
`
export default function Menubar() {
    const [view, setView] = useState(true)
    return(
        <>
            <Menu>
                <AppleIcon src={apple} alt='apple' onClick={() => setView(true)}/>
                <GrapeIcon src={grape} onClick={() => setView(false)}/>
                <WatermelonIcon src={watermelon} />
                <PineappleIcon src={pineapple} />
            </Menu>
            <BarStyle htmlFor="icon">
                <Bar1 />
                <Bar2 />
            </BarStyle>
            <div>{view ? <MainNews /> : <Weather />}</div>
        </>
    )
}