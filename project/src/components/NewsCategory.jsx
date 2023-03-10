import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dummy from "../db/data.json";

const categories = [
  {
    name: "technology",
    img: "     βοΈ    ",
    text: "πΈTECH  ",
  },
  {
    name: "business",
    text: "πλΉμ¦λμ€",
  },
  {
    name: "science",
    text: "πμ¬μ΄μΈμ€",
  },
  {
    name: "entertainment",
    text: "πFUN ",
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
  // //κΈ°μ‘΄ λ΄μ©μ μ μ₯νκ³  μμ μν
  // const [state, setState] = useState([]);
  // //μΉ΄νκ³ λ¦¬μ λ°λΌ λ€λ₯Έ μΉ΄νκ³ λ¦¬λ₯Ό κ·Έλκ·Έλ μ μ₯κ΄λ¦¬ν  μν
  // const [cateState, setCateState] = useState([]);
  // //μ»΄ν¬λνΈμ μνλ₯Ό μ¬λ¬κ° λ§λ€μ΄λ λ¨
  // //κ΄λ¦¬ν  μνμ΄λ¦κ³Ό ν¨μλ μμ μμ¬λ‘ μ μν  μ μμ
  // //μ΄κΈ° μνκ°μΌλ‘ λ¦¬μ€νΈ, μ°Έκ±°μ§ν, λμλλ¦¬, μ«μ, λ¬Έμ λ±λ± λ€μνκ² λ€μ΄κ° μ μμ.
  // const [ready, setReady] = useState(true);

  // useEffect(() => {
  //   //λ€μ 1000 μ«μλ 1μ΄λ₯Ό λ»ν¨
  //   //1μ΄ λ€μ μ€νλλ μ½λλ€μ΄ λ΄κ²¨ μλ ν¨μ
  //   setTimeout(() => {
  //     //κΈ°μ‘΄ λ°μ΄ν°λ‘ λͺ¨λ μ΄κΈ°ν μ€λΉ
  //     let news = dummy.data;
  //     setState(news);
  //     setCateState(news);
  //     setReady(false);
  //   }, 1000);
  // }, []);

  // const category = (cate) => {
  //   if (cate == "μ μ²΄λ³΄κΈ°") {
  //     //μ μ²΄λ³΄κΈ°λ©΄ μλ κΏν λ°μ΄ν°λ₯Ό λ΄κ³  μλ μνκ°μΌλ‘ λ€μ μ΄κΈ°ν
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
              // /* keyμ κ³ μ ν μ΄λ¦μ΄ λ€μ΄κ°κ² v.name ν€μ μμ±μ΄ λ€μ΄κ°λ€(dbμμ±μ²λΌ) */
              key={v.category}
              //active μνλ©΄ active ν΄λμ€λ₯Ό, μλλ©΄ μΈλνμΈλ
              active={category === v.category}
              //jsonμ λ¦¬μ€νΈ. selectλλ κ²μ μ¨ λ°°μ΄ 20κ°λ₯Ό λ€ λ€μ¬λ€λ³Έλ€. μΉ΄νκ³ λ¦¬μ λ§λ λ°μ΄ν° μΆμΆ
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
          category("μ μ²΄λ³΄κΈ°");
        }}
      ></Categorydiv>
      <Categorydiv
        onClick={() => {
          category("TECH");
        }}
      ></Categorydiv>
      <Categorydiv
        onClick={() => {
          category("λΉμ¦λμ€");
        }}
      ></Categorydiv>
      <Categorydiv
        onClick={() => {
          category("μ¬μ΄μΈμ€");
        }}
      ></Categorydiv> */}
    </>
  );
};

export default NewsCategory;
