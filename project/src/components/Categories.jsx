import React, { useState } from "react";
import styled, { css } from "styled-components";

// 카테고리 배열 _ 여기 다 가능, 골라서 가져오기
// const categories = [
//   {
//     name: "all",
//     text: "전체보기",
//   },
//   {
//     name: "business",
//     text: "비즈니스",
//   },
//   {
//     name: "science",
//     text: "과학",
//   },
//   {
//     name: "entertainment",
//     text: "연예",
//   },
//   {
//     name: "sports",
//     text: "스포츠",
//   },
//   {
//     name: "health",
//     text: "건강",
//   },
//   {
//     name: "technology",
//     text: "기술",
//   },
// ];
const categories = [
  {
    name: "technology",
    img: "     ❇️    ",
    text: "🛸TECH",
  },
  {
    name: "business",
    text: "🌐비즈니스",
  },
  {
    name: "science",
    text: "🚀사이언스",
  },
  {
    name: "entertainment",
    text: "🌟FUN",
  },
];
const CategoriesBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* flex-basis: 15px;
  flex-grow: 2; */
  justify-content: middle;
  align-items: middle;
  flex-wrap: nowrap;
  /* padding: 1rem;
  width: 768px; */
  /* margin: 0 auto;
  padding: auto; */
  /* position: absolute;
  top: 0rem;
  left: 0rem; */
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    /* left: 15%;
    top: 13.5rem; */
    top: 4rem;
    left: 0rem;
    width: 4.25rem;
    height: 3.2rem;
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  display: flex;
  /* flex-direction: row; */
  /* align-self: center;
  /* flex: 1; */
  justify-content: middle;
  align-items: middle;
  flex-wrap: wrap;
  position: relative;
  top: 10rem;
  left: 50rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  width: 8.5rem;
  height: 6.5rem;
  border-radius: 10%;
  font-family: "Nanum Myeongjo";
  font-size: 1.5rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  background-color: #e6ecf2;
  @media screen and (max-width: 768px) {
    position: absolute;
    padding: 0;
    margin: 0;
    left: 10rem;
    top: 13.5rem;
    width: 4.25rem;
    height: 3.2rem;
  }
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

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {/* 블록은 리스트, 블록에 키워드 하나씩 */}
      {/* map 메서드로 각 카테고리들(NavLink)을 생성 */}
      {categories.map((v) => (
        <Category
          // /* key에 고유한 이름이 들어가게 v.name */
          key={v.name}
          //active 상태면 active 클래스를, 아니면 언디파인드
          active={category === v.name}
          onClick={() => onSelect(v.name)}
        >
          {/* {v.img} <br /> */}
          {v.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
