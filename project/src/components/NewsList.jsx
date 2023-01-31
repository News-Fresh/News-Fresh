import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Paging from "./Paging";
import NewsItem from "./NewsItem";

const NewsItemBlock = styled.div`
  /* position: relative;
  top: 20rem;
  /* left: 2%; */
  /* box-sizing: border-box;
  margin: 10px; */
  /* padding-bottom: 3rem; */
  /* width: 80%;
  margin: 0 auto;
  margin-top: 2rem; */
  /* justify-content: center;
  display: block; */
  background-color: #e6ecf2;
  position: absolute;
  margin: auto;
  padding: auto;
  left: 54%;
  top: 42%;
  border-radius: 4%;
  max-width: 45%;
  min-width: 45%;
  max-height: 49%;
  min-height: 49%;
  overflow: hidden;

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
  /* @media screen and (max-width: 768px) {
    position: relative;
    top: 5%;
    width: 100%;
    /* height: 20%; */
  /* padding-left: 1rem;
    padding-right: 1rem;
  } */
`;

const NewsList = ({ category }) => {
  // const [items, setItems] = useState([]); //리스트에 나타낼 아이템
  const [count, setCount] = useState(0); //아이템 총 개수
  const [currentpage, setCurrentpage] = useState(1); //현재페이지
  const [postPerPage] = useState(2); //페이지당 아이템 개수

  const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 마지막 포스트
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 처음 포스트
  const [currentPosts, setCurrentPosts] = useState(0); // 현재

  const [articles, setArticles] = useState(null); //api용
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    // async 비동기 함수호출
    const fetchData = async () => {
      // APi 호출 시간동안 보여줄 로딩바
      setLoading(true);
      // try catch문 에러 처리
      // try {
      // props로 넘어온 state로
      const query = category === "all" ? "" : `&category=${category}`;
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a5ee1fb9d67341ec941a37c89cfc3283`

          // `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=aa6dae99785d48dfa798e3c8b62dd365`
        )
        .then((res) => {
          // API 데이터 state 저장
          setArticles(res.data.articles);
          setCount(res.data.articles?.length);
          setIndexOfLastPost(currentpage * postPerPage); // 마지막 페이지의 개수 (한화면에 보여줄 마지막 페이지)
          setIndexOfFirstPost(indexOfLastPost - postPerPage); // 아이템의 첫번째 위치
          setCurrentPosts(
            res.data.articles?.slice(indexOfFirstPost, indexOfLastPost)
          ); // 아티클 배열에 있는 거를 나눠서 가져오는 거
        })
        .catch((err) => {
          console.log(err);
        });
      //로딩중
      setLoading(false);
      console.log(count);
    };
    fetchData();
  }, [category, currentpage, indexOfFirstPost, indexOfLastPost, postPerPage]);

  //페이지 에러 처리
  const setPage = (e) => {
    setCurrentpage(e);
  };

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
    <>
      {/* {currentPosts && count > 0 ? ( */}
      <NewsItemBlock>
        {currentPosts.map((v) => (
          <NewsItem key={v.url} article={v} />
        ))}
      </NewsItemBlock>
      <Paging page={currentpage} count={count} setPage={setPage} />
    </>
  );
};

export default NewsList;
