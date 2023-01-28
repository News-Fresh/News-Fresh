import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsItemBlock = styled.div`
  position: relative;
  top: 10%;
  /* left: 2%; */
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  /* justify-content: center;
  display: block; */
  @media screen and (max-width: 768px) {
    position: relative;
    top: 5%;
    width: 100%;
    /* height: 20%; */
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    // async 비동기 함수호출
    const fetchData = async () => {
      // APi 호출 시간동안 보여줄 로딩바
      setLoading(true);
      // try catch문 에러 처리
      try {
        // props로 넘어온 state로
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=aa6dae99785d48dfa798e3c8b62dd365`
        );
        // API 데이터 state 저장
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  // 대기 중
  if (loading) {
    return <NewsItemBlock>대기중입니다...</NewsItemBlock>;
  }
  // articles 값이 설정 안될경우 (null 오류방지)
  if (!articles) {
    return null;
  }

  // articles 같이 유효할 떄
  return (
    <NewsItemBlock>
      {articles.map((v) => (
        <NewsItem key={v.url} article={v} />
      ))}
    </NewsItemBlock>
  );
};

export default NewsList;
