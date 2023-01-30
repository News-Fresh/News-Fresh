import React from "react";
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
  // {
  //   name: "all",
  //   text: "한 눈에 보는 뉴스",
  // },
  {
    name: "technology",
    text: "IT",
  },
  {
    name: "business",
    text: "기업",
  },
  {
    name: "science",
    text: "사이언스",
  },
  {
    name: "entertainment",
    text: "연예",
  },
  // {
  //   name: "sports",
  //   text: "스포츠",
  // },
  // {
  //   name: "health",
  //   text: "건강",
  // },
];
const CategoriesBlock = styled.div`
  position: relative;
  top: 8%;
  left: 12%;
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

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {/* map 메서드로 각 카테고리들(NavLink)을 생성 */}
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
  );
};

export default Categories;
