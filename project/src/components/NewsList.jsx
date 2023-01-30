import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import Pagination from "react-js-pagination";

// const [page, setPage] = useState(1);
// const handlePageChange = (page) => {
//   setPage(page);
// };

const NewsItemBlock = styled.div`
  position: relative;
  top: 10%;
  /* left: 2%; */
  box-sizing: border-box;
  margin: 10px;
  /* padding-bottom: 3rem; */
  /* width: 80%;
  margin: 0 auto;
  margin-top: 2rem; */
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

const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #337ab7;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(null);

  // <PaginationBox>
  //   <Pagination
  //     activePage={page}
  //     itemsCountPerPage={items}
  //     totalItemsCount={data.length - 1}
  //     pageRangeDisplayed={5}
  //     onChange={handlePageChange}
  //   ></Pagination>
  // </PaginationBox>;

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
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a5ee1fb9d67341ec941a37c89cfc3283`

          // `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=aa6dae99785d48dfa798e3c8b62dd365`
        );
        // API 데이터 state 저장
        setArticles(response.data.articles);
        console.log(response);
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
