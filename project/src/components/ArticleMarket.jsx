import React from "react";
import Icon from "../icons/logo.png";
import styled from "styled-components";

export default function ArticleMarket({}) {
  const MyDiv = styled.div`
    background-color: #e6ecf2;
    position: absolute;
    margin: auto;
    padding: auto;
    left: 82%;
    top: 11rem;
    border-radius: 10%;
    width: 12rem;
    height: 8.5rem;
    cursor: pointer;

    @media screen and (max-width: 1210px) {
      position: absolute;
      left: 60%;
      top: 15rem;
      width: 200px;
    }
    @media screen and (max-width: 768px) {
      position: absolute;
      left: 70%;
      top: 13.5rem;
      width: 5.5rem;
      height: 4.5rem;
    }
  `;
  const MyImg = styled.img`
    position: absolute;
    margin: auto;
    left: 1.5rem;
    top: 1rem;
    width: 3rem;
    height: 3rem;
    @media screen and (max-width: 768px) {
      position: absolute;
      top: 20%;
      left: 15%;
      width: 20%;
      height: 25%;
    }
  `;
  const MyA = styled.a`
    position: absolute;
    margin: auto;
    top: 1.75rem;
    left: 5rem;
    font-weight: inherit;
    font-size: 1.2rem;
    font-family: sans-serif;
    color: #808191;
    @media screen and (max-width: 768px) {
      position: absolute;
      left: 40%;
      top: 20%;
      font-size: 0.25rem;
    }
  `;
  const Keyword = styled.a`
    position: absolute;
    margin: auto;
    top: 5rem;
    left: 2.25rem;
    font-weight: bold;
    font-size: 1.75rem;
    font-family: "Nanum Myeongjo";
    color: #11142d;
    @media screen and (max-width: 768px) {
      position: absolute;
      left: 15%;
      top: 55%;
      font-size: 1.25rem;
    }
  `;
  return (
    <>
      <MyDiv>
        <MyImg src={Icon} alt="icon" />
        <MyA>Keyword</MyA>
        <Keyword>마케팅</Keyword>
      </MyDiv>
    </>
  );
}
