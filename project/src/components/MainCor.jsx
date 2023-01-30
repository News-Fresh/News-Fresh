import React, { useCallback, useState } from "react";
import Icon from "../icons/logo.png";
import styled from "styled-components";
import Categories from "./Categories";
import NewsList from "./NewsList";

export default function MainNews() {
  // API를 넘겨받을 state 선언
  const [data, setData] = useState(null);
  // 기본 카테고리 state 선언
  const [category, setCategory] = useState("all");
  // 콜백으로 사용 할 카테고리 함수
  const onSelect = useCallback((Category) => setCategory(Category), []);

  const NewsDiv = styled.div`
    background-color: #e6ecf2;
    position: absolute;
    margin: auto;
    padding: auto;
    left: 54%;
    top: 42%;
    border-radius: 4%;
    width: 43%;
    height: 50%;
    @media screen and (max-width: 1210px) {
      position: relative;
      margin: auto;
      padding: auto;
      left: 32.5rem;
      top: 30rem;
      border-radius: 4%;
      width: 60rem;
      height: 50rem;
    }
    @media screen and (max-width: 768px) {
      position: relative;
      margin: 0;
      padding: 0;
      left: 17%;
      top: 18.5rem;
      width: 19rem;
      height: 20rem;
      border-radius: 5%;
    }
  `;
  const MyImg = styled.img`
    position: absolute;
    margin: auto;
    left: 5%;
    top: 10%;
    width: 7%;
    height: 12%;
    @media screen and (max-width: 768px) {
      position: relative;
      top: 5%;
      left: 1%;
      width: 9%;
      height: 10%;
    }
  `;

  return (
    <NewsDiv>
      <MyImg src={Icon} alt="icon" />
      {/* JSON 문자열 뿌릴 영역 */}
      {/* {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )} */}
      {/* 카테고리를 넘겨준다 */}
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </NewsDiv>
  );
}
