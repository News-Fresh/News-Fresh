import React, { useCallback, useState } from 'react';
import Icon from '../icons/logo.png';
import styled from 'styled-components';
import Categories from './Categories';
import NewsList from './NewsList';

export default function MainNews() {
  // API를 넘겨받을 state 선언
  const [data, setData] = useState(null);
  // 기본 카테고리 state 선언
  const [category, setCategory] = useState('all');
  // 콜백으로 사용 할 카테고리 함수
  const onSelect = useCallback((Category) => setCategory(Category), []);

  const NewsDiv = styled.div`
    background-color: #e6ecf2;
    position: relative;
    margin: auto;
    padding: auto;
    left: 42rem;
    top: 40rem;
    border-radius: 4%;
    width: 80rem;
    height: 65rem;
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
      left: 10rem;
      top: 25rem;
      width: 60rem;
      height: 50rem;
      border-radius: 5%;
    }
  `;
  const MyImg = styled.img`
    position: absolute;
    margin: auto;
    left: 7rem;
    top: 3rem;
    width: 5rem;
    height: 5rem;
    @media screen and (max-width: 600px) {
      position: absolute;
      top: 20%;
      left: 15%;
      width: 20%;
      height: 25%;
    }
  `;

  return (
    <NewsDiv>
      <MyImg src={Icon} alt="icon" />
      {/* JSON 문자열 뿌릴 영역 */}
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
      {/* 카테고리를 넘겨준다 */}
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </NewsDiv>
  );
}
