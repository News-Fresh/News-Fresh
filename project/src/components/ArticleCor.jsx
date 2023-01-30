import React from "react";
import Icon from "../icons/logo.png";
import styled, { css } from "styled-components";

const categories = [
  {
    name: "business",
    text: "기업",
  },
];
const CategoriesBlock = styled.div`
  position: relative;
  top: 45%;
  left: 22%;
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    display: none;
    /* position: relative;
    margin: 0;
    top: 2rem;
    left: 0%;
    /* overflow-x: auto; */
  }
`;

const Category = styled.div`
  font-size: 1.25rem;
  font-family: "Nanum Myeongjo";
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  ${(props) =>
    props.active &&
    css`
            font-weight: 800;
            border-bottom: 2px solid #1fd072;
            color; #1fd072;
            &:hover {
                color: #1fd072;
            }
        `}

  & + & {
    margin-left: 1rem;
  }
`;
const MyDiv = styled.div`
  background-color: #e6ecf2;
  position: absolute;
  margin: auto;
  padding: auto;
  left: 65%;
  top: 11rem;
  border-radius: 10%;
  width: 9rem;
  height: 6.5rem;
  cursor: pointer;

  @media screen and (max-width: 1210px) {
    position: absolute;
    left: 60%;
    top: 15rem;
    width: 200px;
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 35%;
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
  left: 3rem;
  font-weight: bold;
  font-size: 1.5rem;
  font-family: "Nanum Myeongjo";
  color: #11142d;
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 17%;
    top: 55%;
    font-size: 1rem;
  }
`;
const ArticleCor = ({ onSelect, category }) => {
  return (
    <>
      <MyDiv>
        <MyImg src={Icon} alt="icon" />
        <MyA>Keyword</MyA>
        {/* <Keyword>기업</Keyword> */}
        {/* 카테고리블락 */}
        <CategoriesBlock>
          {categories.map((v) => (
            <Category
              // /* key에 고유한 이름이 들어가게 v.name */
              key={v.name}
              //active 상태면 active 클래스를, 아니면 언디파인드
              active={category === v.name}
              onClick={() => onSelect(v.name)}
            >
              {v.text}
            </Category>
          ))}
        </CategoriesBlock>
      </MyDiv>
    </>
  );
};

export default ArticleCor;
