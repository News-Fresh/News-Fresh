import React from "react";
import Icon from "../icons/logo.png";
import styled from "styled-components";

export default function ArticleGo() {
  const MyDiv = styled.div`
    background-color: #e6ecf2;
    position: absolute;
    margin: auto;
    padding: auto;
    left: 76%;
    top: 11rem;
    border-radius: 10%;
    width: 9rem;
    height: 6.5rem;
    cursor: pointer;

    @media screen and (max-width: 1210px) {
      position: absolute;
      left: 40%;
      top: 15rem;
      width: 200px;
    }
    @media screen and (max-width: 768px) {
      position: absolute;
      left: 55%;
      top: 13.5rem;
      width: 4.25rem;
      height: 3.2rem;
    }
  `;
  const MyImg = styled.img`
    position: absolute;
    margin: auto;
    left: 0.75rem;
    top: 1rem;
    width: 2rem;
    height: 2rem;
    @media screen and (max-width: 768px) {
      position: absolute;
      top: 20%;
      left: 15%;
      width: 15%;
      height: 20%;
    }
  `;
  const MyA = styled.a`
    position: absolute;
    margin: auto;
    top: 1.25rem;
    left: 3.25rem;
    font-weight: inherit;
    font-size: 1rem;
    font-family: sans-serif;
    color: #808191;
    @media screen and (max-width: 768px) {
      position: absolute;
      left: 35%;
      top: 15%;
      font-size: 0.15rem;
    }
  `;
  const Keyword = styled.a`
    position: absolute;
    margin: auto;
    top: 3.8rem;
    left: 1.75rem;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: "Nanum Myeongjo";
    color: #11142d;
    @media screen and (max-width: 768px) {
      position: absolute;
      left: 15%;
      top: 55%;
      font-size: 1rem;
    }
  `;
  return (
    <>
      <MyDiv>
        <MyImg src={Icon} alt="icon" />
        <MyA>Keyword</MyA>
        <Keyword>사이언스</Keyword>
      </MyDiv>
    </>
  );
}
