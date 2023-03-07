import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import styled, {keyframes} from "styled-components";
import Icon from "../icons/logo.png";
import Loading from "../icons/loading.png";
import NewsItem from "./NewsItem";
import Paging from "./Paging";
import dummy from "../db/data.json";

const Searchdiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  position: absolute;
  width: 40%;
  height: 30px;
  right: 50px;
  top: 95px;
  border-radius: 22px 0 0 22px;
  border: none;
  @media screen and (max-width: 1210px) {
    left: 170px;
    top: 150px;
    width: 65%;
  }
  @media screen and (max-width: 768px) {
    left: 15%;
    width: 60%;
  }
`;
const Search = styled.input`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  gap: 8px;
  position: relative;
  width: 100%;
  height: 30px;
  left: 1px;

  background: #cde3b2;
  border-radius: 22px 0 0 22px;
  border: none;
  @media screen and (max-width: 1210px) {
  }
  @media screen and (max-width: 768px) {
    width: 75%;
  }  &:focus {
    outline: none;
  }
`;
const SearchBtn = styled.button`
  flex-direction: row;
  position: relative;
  width: 80px;
  height: 50px;
  right: 5%;
  color: white;
  font-weight: 700;
  font-family: "Poppins";
  font-style: normal;
  z-index: 1;
  background: green;
  border-radius: 0 22px 22px 0;
  border: none;
`;

const ExitBtn = styled.button`
  
  flex-direction: row;
  position: absolute;
  width: 20%;
  height: 50px;
  right: 50px;
  top: 30px;
  color: black;
  font-weight: 700;
  font-family: 'Poppins';
  font-style: normal;
  z-index: 1;
  background: white;
  border-radius: 15px;
  border: none;
  @media screen and (max-width: 1210px) {
    right: 14%;
    top: 150px;
  }
  @media screen and (max-width: 768px) {
    left: 70%;
  }
`;

const rotateImage = keyframes `
100% {
    transform: rotate(360deg);
}
`

const LaodingImg = styled.img`
position: absolute;
top : 50%;
left : 50%;
transition: all 0.5s linear;
animation : ${rotateImage} 6s linear infinite;
transform-origin: 50% 50%;

`

const NewsItemBlock = styled.div`
  background-color: #fffdf4;
  position: absolute;
  margin: auto;
  padding: auto;
  left: 53%;
  top: 23%;
  border-radius: 4%;
  max-width: 45%;
  min-width: 45%;
  max-height: 72%;
  min-height: 72%;
  overflow: scroll;
  overflow-y: auto;
  z-index:1;
  &::-webkit-scrollbar {
    width: 12px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #c4dea3;
  }
  &::-webkit-scrollbar-track {
    background-color: #eee;
    border-radius: 10px;
  }
  @media screen and (max-width: 1210px) {
    position: absolute;
    margin: 0;
    padding: 0;
    left: 30%;
    top: 22rem;
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    margin: 0;
    padding: 0;
    left: 10%;
    top: 18rem;
    max-width: 20rem;
  }
`;

const LogoIcon = styled.img`
  position: absolute;
  width: 33px;
  height: 33px;
  left: 20px;
  top: 25px;
  @media screen and (max-width: 768px) {
    left: 20px;
  }
`;

const NewsText = styled.span`
  position: absolute;
  width: 311px;
  height: 28px;
  left: 55px;
  top: 30px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 17.9381px;
  line-height: 28px;
  letter-spacing: -0.512518px;

  color: #171717;
  @media screen and (max-width: 768px) {
    left: 55px;
    top: 26px;
    font-size: 15px;
  }
`;

const SearchNewsItemBlock = styled.div`
  display: flex;
  font-family: "Nanum Myeongjo";
  text-align: center;
  margin-top: 2rem;
  padding: 2rem 1rem 0rem 1rem;
  max-width: 90%;
  max-height: 70%;
  .thumbnail {
    img {
      margin-right: 1rem;
      padding: 1rem;
      width: 5.5rem;
      height: 4rem;
      object-fit: cover;
      border-radius: 10%;
    }
  }
  .contents {
    h2 {
      margin: 5px;
      font-size: 1rem;
      font-weight: 850;
      @media screen and (max-width: 1210px) {
        margin: 5px;
        font-size: 0.75rem;
        font-weight: 850;
      }
      @media screen and (max-width: 768px) {
        margin: 5px;
        font-size: 0.5rem;
        font-weight: 850;
      }
      a {
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
      font-size: 1rem;
      white-space: normal;
      @media screen and (max-width: 1210px) {
        margin: 0;
        font-size: 0.75rem;
      }
      @media screen and (max-width: 768px) {
        margin: 0;
        font-size: 0.5rem;
      }
    }
  }
  & + & {
    margin-top: 1rem;
  }
  @media screen and (max-width: 1210px) {
    left: 30%;
    top: 22rem;
    height: 6rem;
    display: flex;
    font-family: "Nanum Myeongjo";
    text-align: center;
    margin-top: 1rem;
    padding-left: 0.75rem;
    max-width: 90%;
    max-height: 70%;
    padding: 2rem 1rem 1rem 1rem;
  }
  @media screen and (max-width: 768px) {
    left: 30%;
    top: 22rem;
    height: 7rem;
    display: flex;
    font-family: "Nanum Myeongjo";
    text-align: center;
    margin-top: 1rem;
    padding-left: 0.75rem;
    max-width: 90%;
    overflow: scroll;
    max-height: 70%;
  }
`;
export default function SearchNewsData() {
  const [search, setSearch] = useState({});
  const [searchresult, setSearchresult] = useState(true);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(null);
  const [dataarray, setDataarray] = useState([]);

  // const url = `https://newsapi.org/v2/everything?q=${search}&from=2023-02-01&sortBy=popularity&apiKey=41a85db10eab456d8e732c5685e33b2a`;
  
  const onSearch = (e) => {
    setSearchresult(false);
    setSearch(e.target.value);
  };
  
  //검색엔진버튼 눌러서 화면전환
  const SearchEnd = () => {
    //alert창이 떠서 처리해줌.
    setLoading(null);
    setResult([]);
  }
  const inputEnter = (e) => {
    if(e.key ==='Enter'){
      NewsShow();
    }
  }
    const NewsShow = 
     () => {
       //  setSearchresult(true);
       // APi 호출 시간동안 보여줄 로딩바
       setLoading(true);
       try {
         for (let i = 0; i < dummy.data.length; i ++){
           if(dummy.data[i].description.includes(search) === true) 
           setDataarray( [...dataarray, dummy.data[i]])
           console.log('데이터길이',dataarray);
          console.log('길이',dataarray);
          setResult(dataarray);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  // 대기 중
  if (loading) {
    return <NewsItemBlock><LaodingImg src={Loading} /></NewsItemBlock>;
  }
  // articles 값이 설정 안될경우 (null 오류방지)
  if (!result) {
    return "null";
  }
    return(
        <> 
          <Searchdiv>
                <Search type="text" placeholder="Search..." onChange={onSearch} onKeyPress={inputEnter} autoFocus/>
                <SearchBtn onClick={NewsShow}>검색</SearchBtn>
          </Searchdiv>
            {result.length !== 0 ?
            <NewsItemBlock>
                <LogoIcon src={Icon} alt="icon" />
                <NewsText>News 검색결과</NewsText>
              <ExitBtn onClick={SearchEnd}>검색 엔진 종료</ExitBtn>
                {/* {Object.keys(result).length !== 0 && ( */}
                  <SearchNewsItemBlock>
                    <div>
                      {result && result.map((v) => (
                    <NewsItem key={v.url} article={v} />
                      ))}
                  </div>
                  </SearchNewsItemBlock>
            </NewsItemBlock>
            :
            loading !== null && searchresult !== false ?
            alert('검색 결과가 없습니다.') 
            : ''
            }
                {/* )} */}
        </>
    )
}
