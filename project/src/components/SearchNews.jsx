import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import styled, {keyframes} from "styled-components";
import Icon from "../icons/logo.png";
import Loading from "../icons/loading.png";
import NewsItem from "./NewsItem";
import Paging from "./Paging";

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
  /* background: #cde3b2; */
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
  /* top: 80px; */

  background: #cde3b2;
  border-radius: 22px 0 0 22px;
  border: none;
  @media screen and (max-width: 1210px) {
    /* left: 170px;
    top: 150px; */
    /* width: 65%; */
  }
  @media screen and (max-width: 768px) {
    /* left: 15%; */
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
  /* top: 80px; */
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
  /* overflow: hidden; */
  /* display: none; */
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
  /* overflow: hidden; */
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
  /* or 157% */

  letter-spacing: -0.512518px;

  /* Black/B100 */

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
  /* padding-left: 1rem; */
  /* padding-bottom: 1rem; */
  padding: 2rem 1rem 0rem 1rem;
  /* height: 6rem; */
  max-width: 90%;
  /* overflow: hidden; */
  max-height: 70%;
  .thumbnail {
    img {
      margin-right: 1rem;
      padding: 1rem;
      width: 5.5rem;
      height: 4rem;
      object-fit: cover;
      border-radius: 10%;

      /* @media screen and (max-width: 1210px) {
        width: 7rem;
        height: 6rem;
      } */
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
    /* padding-bottom: 1rem; */
    max-width: 90%;
    /* overflow: hidden; */
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
    /* padding-bottom: 1rem; */
    max-width: 90%;
    overflow: scroll;
    max-height: 70%;
  }
`;

export default function SearchNews() {
  const [search, setSearch] = useState({});
  const [searchresult, setSearchresult] = useState(true);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(null);
  // const [currentPosts, setCurrentPosts] = useState(0); // ??????
  // const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // ?????? ?????????
  // const [indexOfLastPost, setIndexOfLastPost] = useState(0); // ????????? ?????????
  // const [currentpage, setCurrentpage] = useState(1); //???????????????
  // const [postPerPage] = useState(2); //???????????? ????????? ??????
  // const [count, setCount] = useState(0);
  // const query = search === "" ? "" : `&search=${search}`;

  // const url = `https://newsapi.org/v2/everything?q=${search}&from=2023-02-01&sortBy=popularity&apiKey=dc5d90593807448a8ac39ac9a3571a51`;
  const url = `https://newsapi.org/v2/everything?q=${search}&from=2023-03-07&sortBy=popularity&apiKey=41a85db10eab456d8e732c5685e33b2a`;
  
  const onSearch = (e) => {
    setSearchresult(false);
    setSearch(e.target.value);
  };
  
  //?????????????????? ????????? ????????????
  const SearchEnd = () => {
    //alert?????? ?????? ????????????.
    setLoading(null);
    setResult([]);
  }
  //????????? ????????? ??????
  const inputEnter = (e) => {
    if(e.key === 'Enter'){
      NewsShow();
    }
  }

  console.log('?????????',loading);
  console.log('??????',searchresult);
  console.log('??????',result);
  // useEffect(() => {
    const NewsShow = async () => {
      setSearchresult(true);
      // APi ?????? ???????????? ????????? ?????????
      setLoading(true);
      
      // divStyle.current.style = 'display:inline;'
      // console.log(divStyle.current.style.display);
      // try catch??? ?????? ??????
      try {
        const res = await axios({
          method: "get",
          url: url,
        });
        setResult(res.data.articles);
        console.log("?????? ???",res.data);
        // setCurrentPosts(
          //   res.data.articles?.slice(indexOfFirstPost, indexOfLastPost)
          // );
          // // setCount(res.data.articles?.length);
          // setCurrentPosts(
            //   res.data.articles?.slice(indexOfFirstPost, indexOfLastPost)
            // );
            // setIndexOfLastPost(currentpage * postPerPage); // ????????? ???????????? ?????? (???????????? ????????? ????????? ?????????)
      // setIndexOfFirstPost(indexOfLastPost - postPerPage); // ???????????? ????????? ??????
      // console.log(res.data.articles?.slice(indexOfFirstPost, indexOfLastPost))
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  
  //   NewsShow();
  // }, []);
  // weatherShow();
  // });

  // ?????? ???
  if (loading) {
    return <NewsItemBlock><LaodingImg src={Loading} /></NewsItemBlock>;
  }
  // articles ?????? ?????? ???????????? (null ????????????)
  if (!result) {
    return "null";
  }
    return(
        <> 
          <Searchdiv>
                <Search type="text" placeholder="Search..." onChange={onSearch} onKeyPress={inputEnter} autoFocus/>
                <SearchBtn onClick={NewsShow}>??????</SearchBtn>
          </Searchdiv>
                {/* <SearchBtn onClick={stylechange}>????????????</SearchBtn> */}
            {result.length !== 0 ?
            // '' :
            <NewsItemBlock>
                <LogoIcon src={Icon} alt="icon" />
                <NewsText>News ????????????</NewsText>
              <ExitBtn onClick={SearchEnd}>?????? ?????? ??????</ExitBtn>
                {/* {Object.keys(result).length !== 0 && ( */}
                  <SearchNewsItemBlock>
                    <div>
                      {result && result.map((v) => (
                    <NewsItem key={v.url} article={v} />
                      ))}
                  </div>
                  </SearchNewsItemBlock>
            </NewsItemBlock> 
            // : loading !== null && searchresult !== false ?
            // alert('?????? ????????? ????????????.') 
            : ''
            }
                {/* )} */}
        </>
    )
}
