import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import Paging from "./Paging";

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

const NewsItems = styled.div`
  display: flex;
  .thumbnail {
    img {
      margin-right: 1rem;
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 10%;
    }
  }
  .contents {
    h2 {
      margin: 0;
      font-size: 1.25rem;
      a {
        /* color: block; */
        color: #47661f;
      }
      a:hover {
        color: #79984e;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      font-size: 1.25rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsList = ({ category }) => {
  const [items, setItems] = useState([]); //리스트에 나타낼 아이템
  const [count, setCount] = useState(0); //아이템 총 개수
  const [currentpage, setCurrentpage] = useState(1); //현재페이지
  const [postPerPage] = useState(2); //페이지당 아이템 개수

  const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 마지막 포스트
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 처음 포스트
  const [currentPosts, setCurrentPosts] = useState(0); // 현재

  const [articles, setArticles] = useState(null); //api용
  const [loading, setLoading] = useState(null);

  //items호출

  // React.useEffect((articles) => { // 우리가 쓸 data 담기
  //   setCount(articles.length);
  //   setIndexOfLastPost(currentpage * postPerPage);
  //   setIndexOfFirstPost(indexOfLastPost - postPerPage);
  //   setCurrentPosts(articles.slice(indexOfFirstPost, indexOfLastPost));
  // }, [currentpage, indexOfFirstPost, indexOfLastPost, items, postPerPage]);

  // const setPage = (e) => {
  //   setCurrentpage(e);
  // };

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
        })
        .catch((err) => {
          console.log(err);
        });
      //로딩중
      setLoading(false);
      console.log(articles?.length);
      setCount(articles?.length);
      setIndexOfLastPost(currentpage * postPerPage); // 마지막 페이지의 개수 (한화면에 보여줄 마지막 페이지)
      setIndexOfFirstPost(indexOfLastPost - postPerPage); // 아이템의 첫번째 위치
      setCurrentPosts(articles?.slice(indexOfFirstPost, indexOfLastPost)); // 아티클 배열에 있는 거를 나눠서 가져오는 거
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
      {articles.map((v) => (
        <NewsItems>
          {v.urlToImage && (
            <div className="thumbnail">
              <a href={v.url} target="_blank" rel="noopener noreferrer">
                <img src={v.urlToImage} alt="thumbnail" />
              </a>
            </div>
          )}
          <div className="contents">
            <h2>
              <a href={v.url} target="_blank" rel="noopener noreferrer">
                {v.title}
              </a>
            </h2>
            <p>{v.description}</p>
          </div>
        </NewsItems>
      ))}
      {/* <NewsItemBlock> */}
      {/* {articles.map((v) => (
          <NewsItem key={v.url} article={v} />
        ))} */}
      {/* </NewsItemBlock> */}

      <Paging page={currentpage} count={count} setPage={setPage} />
    </>
  );
};

export default NewsList;
