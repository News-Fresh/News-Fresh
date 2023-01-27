import React from "react";
import styled from 'styled-components';
import Icon from "../icons/logo.png"

const Search = styled.input`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px;
gap: 8px;

position: absolute;
width: 40%;
height: 30px;
right: 50px;
top: 80px;

background: #CDE3B2;
border-radius: 22px;
border : none;
@media screen and (max-width : 1210px){
    left:170px;
    top: 150px;
    width: 65%;
@media screen and (max-width : 600px){
    left:20%;
    top: 150px;
    width: 60%;
}
`
const LogoIcon = styled.img`
    position: absolute;
    width: 100px;
    height: 100px;
    left: 530px;
    top: 40px;
    @media screen and (max-width: 600px){
    left:45%
    }
`
const LogoName = styled.a`
    position: absolute;
    height: 115px;
    left: 180px;
    right: 67.08%;
    top: 50px;

    font-family: 'Piazzolla';
    font-style: normal;
    font-weight: 700;
    font-size: 70px;
    line-height: 99px;
    letter-spacing: -1.13533px;

    color: #83A558;
    text-decoration:none;
    
@media screen and (max-width : 600px){
    display:none;
}
`

export default function Logo() {

    return(
    <>
        <LogoIcon src={Icon} alt="logo" />
        <LogoName href="">
            NewsFresh
        </LogoName>
        <Search type="text" placeholder="Search..." />
    </>
    )
}