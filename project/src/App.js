import "./App.css";
import Logo from "./components/Logo";
import Menubar from "./components/Menubar";
// import axios from "axios";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./Pages/NewsPage";
import Categories from "./components/Categories";
import { useCallback, useState } from "react";
import styled from "styled-components";
import NewsList from "./components/NewsList";
import SearchNews from "./components/SearchNews";
import Weather from "./components/Weather";

function App() {
  const [category, setCategory] = useState("all");
  // 콜백으로 사용 할 카테고리 함수
  const onSelect = useCallback((Category) => setCategory(Category), []);
  const NewsDiv = styled.div`
    background-color: #e6ecf2;
    position: absolute;
    margin: auto;
    padding: auto;
    left: 50%;
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
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
      <SearchNews />

      {/* <NewsDiv>
        <NewsList category={category} />
      </NewsDiv> */}
      <Menubar />
      <Logo />
      <Weather />
      {/* <Views /> */}
      <Routes>
        <Route path="/:category?" component={NewsPage} />
      </Routes>
    </div>
  );
}

export default App;
