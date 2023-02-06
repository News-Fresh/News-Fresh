import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dummy from "../db/data.json";

const categories = [
  {
    name: "technology",
    img: "     ❇️    ",
    text: "🛸TECH  ",
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
    text: "🌟FUN ",
  },
];
const CategoriesBlock = styled.div`
  display: flex;
  justify-content: center;
  top: 10rem;
  right: 40px;
  width: 45%;
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
  /* justify-content: middle; */
  align-items: middle;
  flex-wrap: nowrap;
  position: absolute;
  /* flex-basis: 15px;
  flex-grow: 2; */
  /* padding: 1rem;
  width: 768px; */
  /* margin: 0 auto;
  padding: auto; */
  @media screen and (max-width: 1210px) {
    top: 14rem;
    right: 18%;
    width: 60%;
    /* display: flex; */
    /* position: absolute; */
    /* left: 15%;
    top: 13.5rem; */
  }
  @media screen and (max-width: 768px) {
    top: 14rem;
    height: 3.2rem;
    left: 15%;
    width: 66%;
    /* display: flex; */
    /* position: absolute; */
    /* left: 15%;
    top: 13.5rem; */
  }
`;

const NewsCategory = (onSelect, category) => {
  // //기존 내용을 저장하고 있을 상태
  // const [state, setState] = useState([]);
  // //카테고리에 따라 다른 카테고리를 그때그때 저장관리할 상태
  // const [cateState, setCateState] = useState([]);
  // //컴포넌트에 상태를 여러개 만들어도 됨
  // //관리할 상태이름과 함수는 자유자재로 정의할 수 있음
  // //초기 상태값으로 리스트, 참거짓형, 딕셔너리, 숫자, 문자 등등 다양하게 들어갈 수 있음.
  // const [ready, setReady] = useState(true);

  // useEffect(() => {
  //   //뒤의 1000 숫자는 1초를 뜻함
  //   //1초 뒤에 실행되는 코드들이 담겨 있는 함수
  //   setTimeout(() => {
  //     //기존 데이터로 모두 초기화 준비
  //     let news = dummy.data;
  //     setState(news);
  //     setCateState(news);
  //     setReady(false);
  //   }, 1000);
  // }, []);

  // const category = (cate) => {
  //   if (cate == "전체보기") {
  //     //전체보기면 원래 꿀팁 데이터를 담고 있는 상태값으로 다시 초기화
  //     setCateState(state);
  //     console.log(state);
  //   } else {
  //     setCateState(
  //       state.filter((d) => {
  //         return d.category == cate;
  //       })
  //     );
  //   }
  // };

  const CategoriesBlock = styled.div`
    display: flex;
    justify-content: center;
    top: 10rem;
    right: 40px;
    width: 45%;
    /* flex-direction: row; */
    /* flex-wrap: wrap; */
    /* justify-content: middle; */
    align-items: middle;
    flex-wrap: nowrap;
    position: absolute;
    /* flex-basis: 15px;
    flex-grow: 2; */
    /* padding: 1rem;
    width: 768px; */
    /* margin: 0 auto;
    padding: auto; */
    @media screen and (max-width: 1210px) {
      top: 14rem;
      right: 18%;
      width: 60%;
      /* display: flex; */
      /* position: absolute; */
      /* left: 15%;
      top: 13.5rem; */
    }
    @media screen and (max-width: 768px) {
      top: 14rem;
      height: 3.2rem;
      left: 15%;
      width: 66%;
      /* display: flex; */
      /* position: absolute; */
      /* left: 15%;
      top: 13.5rem; */
    }
  `;

  const Category = styled.div`
    font-size: 1rem;
    display: flex;
    /* flex-direction: row; */
    /* align-self: center;
    /* flex: 1; */
    flex-wrap: wrap;
    margin-left: 20px;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    width: 8.5rem;
    height: 5rem;
    border-radius: 10%;
    font-family: "Nanum Myeongjo";
    font-size: 1.25rem;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    background-color: #fffdf4;
    /* background-color: #e6ecf2; */
    @media screen and (max-width: 1210px) {
      font-size: 15px;
      width: 15%;
      /* position: absolute;
      padding: 0;
      margin: 0;
      left: 10rem;
      top: 13.5rem;*/
    }
    @media screen and (max-width: 768px) {
      font-size: 10px;
      width: 30%;
      height: 3rem;
      /* position: absolute;
      padding: 0;
      margin: 0;
      left: 10rem;
      top: 13.5rem;*/
    }
    &:hover {
      color: #495057;
    }

    & + & {
      margin-left: 1rem;
    }
  `;

  console.log(category);

  // const categoryIF = (category) => {
  //   let result;
  //   if(category == categories.name){
  //     result =
  //   }
  // }

  return (
    <>
      {categories.name === dummy.data.category && (
        <CategoriesBlock>
          {categories.map((v) => (
            <Category
              // /* key에 고유한 이름이 들어가게 v.name 키에 속성이 들어간다(db속성처럼) */
              key={v.category}
              //active 상태면 active 클래스를, 아니면 언디파인드
              active={category === v.category}
              //json은 리스트. select되는 것은 온 배열 20개를 다 들여다본다. 카테고리에 맞는 데이터 추출
              onClick={() => onSelect(v.category)}
            >
              {/* {v.img} <br /> */}
              {v.text}
            </Category>
          ))}
        </CategoriesBlock>
      )}

      {/* <Categorydiv
        onClick={() => {
          category("전체보기");
        }}
      ></Categorydiv>
      <Categorydiv
        onClick={() => {
          category("TECH");
        }}
      ></Categorydiv>
      <Categorydiv
        onClick={() => {
          category("비즈니스");
        }}
      ></Categorydiv>
      <Categorydiv
        onClick={() => {
          category("사이언스");
        }}
      ></Categorydiv> */}
    </>
  );
};

export default NewsCategory;
