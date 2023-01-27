import React from "react";
import styled from 'styled-components';
import apple from '../icons/apple.png';
import grape from '../icons/grape.png';
import watermelon from '../icons/watermelon.png';
import pineapple from '../icons/pineapple.png';


const Menu = styled.div`
    background-color : #C4DEA3;
    position: fixed;
    width: 135px;
    height: 100%;
    left: 0px;
    top: 0px;
    @media screen and (max-width: 600px) {
        display:none;
    }
    `
const BarStyle = styled.label`
    position: absolute;
    width: 36.33px;
    height: 28.37px;
    left: 35px;
    top: 88px;
    cursor : pointer;
    @media screen and (max-width: 600px) {
        left: 0px;
    }
    `
const Bar1 = styled.span`
    width: 100%;
    height: 20%;
    border-radius:30px;
    background: white;
    position: absolute;
    @media screen and (max-width: 600px) {
        width: 20px;
        background: black;
    }
`
const Bar2 = styled.span`
    width: 100%;
    height: 20%;
    border-radius:30px;
    background: white;
    position: absolute;
    top: 15px;
    @media screen and (max-width: 600px) {
        width: 20px;
        background: black;
    }
`
const AppleIcon = styled.img`
    position: absolute;
    width: 50px;
    height: 50px;
    left: 45px;
    top: 256px;
    cursor : pointer;
`
const GrapeIcon = styled.img`
    position: absolute;
    width: 50px;
    height: 50px;
    left: 45px;
    top: 383px;
    cursor : pointer;
`
const WatermelonIcon = styled.img`
    position: absolute;
    width: 50px;
    height: 50px;
    left: 45px;
    top: 510px;
    cursor : pointer;
`
const PineappleIcon = styled.img`
    position: absolute;
    width: 50px;
    height: 50px;
    left: 45px;
    top: 637px;
    cursor : pointer;
`
export default function Menubar() {

    return(
        <>
            <Menu>
                <AppleIcon src={apple} alt='apple' />
                <GrapeIcon src={grape} />
                <WatermelonIcon src={watermelon} />
                <PineappleIcon src={pineapple} />
            </Menu>
            <BarStyle htmlFor="icon">
                <Bar1 />
                <Bar2 />
            </BarStyle>
        </>
    )
}