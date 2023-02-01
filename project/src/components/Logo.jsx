import React from "react";
import styled from "styled-components";
import Icon from "../icons/logo.png";

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

  background: #cde3b2;
  border-radius: 22px;
  border: none;
  @media screen and (max-width: 1210px) {
    left: 170px;
    top: 150px;
    width: 65%;
  }
  @media screen and (max-width: 768px) {
    left: 15%;
    width: 60%;
  }
`;
const LogoIcon = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  left: 800px;
  top: 40px;
  @media screen and (max-width: 1800px) {
    left:550px;
  }
  @media screen and (max-width: 1600px) {
    left:530px;
  }
  @media screen and (max-width: 1210px) {
    left: 470px;
    top: 60px;
    width:80px;
    height: 80px;
  }
  @media screen and (max-width: 768px) {
    left: 45%;
    top: 60px;
    width:80px;
    height: 80px;
  }
`;
const LogoName = styled.a`
  position: absolute;
  height: 115px;
  left: 450px;
  // right: 67.08%;
  top: 50px;

  font-family: "Piazzolla";
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 99px;
  letter-spacing: -1.13533px;

  color: #83a558;
  text-decoration: none;

  @media screen and (max-width: 1800px) {
    left:220px;
  }
  @media screen and (max-width: 1600px) {
    left:180px;
  }
  @media screen and (max-width: 1210px) {
    left:180px;
    top: 60px;
    font-size: 60px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default function Logo() {
  return (
    <>
      <div>

        <LogoIcon src={Icon} alt="logo" />
        <LogoName href="">NewsFresh</LogoName>
      </div>
      {/* <Search type="text" placeholder="Search..." /> */}
    </>
  );
}
