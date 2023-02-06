import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Paging from "./Paging";
import NewsItem from "./NewsItem";
import Icon from "../icons/logo.png";
import dummy from "../db/data.json";
import NewsCategory from "./NewsCategory";
import NewsItemJson from "./NewsItemJson";

const NewsItemBlock = styled.div`
  background-color: #fffdf4;
  position: absolute;
  margin: auto;
  padding: auto;
  left: 54%;
  top: 35%;
  border-radius: 4%;
  max-width: 45%;
  min-width: 45%;
  max-height: 49%;
  min-height: 49%;
  overflow: scroll;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 12px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #c4dea3;
  }
  &::-webkit-scrollbar-track {
    background-color: #eee;
    border-radius: 10px;
  }
  /* overflow: hidden; */
  @media screen and (max-width: 1210px) {
    position: absolute;
    margin: 0;
    padding: 0;
    left: 30%;
    top: 22rem;
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    margin: 0;
    padding: 0;
    left: 10%;
    top: 18rem;
    max-width: 20rem;
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
const NewsText = styled.span`
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
const NewsListData = () => {
  return (
    <>
      {/* {currentPosts && count > 0 ? ( */}
      <NewsItemBlock>
        <LogoIcon src={Icon} alt="icon" />
        <NewsText>Today News</NewsText>
        {dummy.data.map((v) => (
          <NewsItemJson key={v.url} article={v} />
        ))}
      </NewsItemBlock>
      {/* <Paging page={currentpage} count={count} setPage={setPage} /> */}
    </>
  );
};

export default NewsListData;
