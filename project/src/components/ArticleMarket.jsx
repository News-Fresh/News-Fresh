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
    top: 24%;
    border-radius: 10%;
    width: 12rem;
    height: 8.5rem;
  `;
  const MyImg = styled.img`
    position: absolute;
    margin: auto;
    left: 1.5rem;
    top: 1rem;
    width: 3rem;
    height: 3rem;
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
