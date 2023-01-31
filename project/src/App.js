import "./App.css";

import Logo from "./components/Logo";
import Menubar from "./components/Menubar";
// import axios from "axios";

import { Route, Routes } from "react-router-dom";
import NewsPage from "./Pages/NewsPage";
import Categories from "./components/Categories";
import { useCallback, useState } from "react";
import MainNews from "./components/MainNews";
import styled from "styled-components";
import NewsList from "./components/NewsList";
import Paging from "./components/Paging";
import ArticleIT from "./components/ArticleIT";
import Weather from "./components/Weather";
import WeatherForcast from "./components/WeatherForecast";

function App() {
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
  return (
    <div className="App">
      {/* <MainNews /> */}
      <Categories category={category} onSelect={onSelect} />
      {/* <NewsDiv>
        <NewsList category={category} />
      </NewsDiv> */}
      {/* props로 카테고리 state와 함수를 넘겨줌 */}
      {/* <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} /> */}
      {/* <MainNews /> */}
      {/* <Categories category={category} onSelect={onSelect} /> */}
      <Menubar />
      <Logo />
      <Weather />
      <WeatherForcast />
      {/* <ArticleIT />
      <ArticleGo />
      <ArticleMarket />
      <ArticleCor /> */}
      <Routes>
        <Route path="/:category?" component={NewsPage} />
      </Routes>
    </div>
  );
}

export default App;
