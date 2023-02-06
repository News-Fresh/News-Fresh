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
import NewsListData from "./components/NewsListData";
import NewsItem from "./components/NewsItem";
import NewsCategory from "./components/NewsCategory";
import NewsList2 from "./components/NewsList2";

function App() {
  const [category, setCategory] = useState("all");
  // 콜백으로 사용 할 카테고리 함수
  const onSelect = useCallback((Category) => setCategory(Category), []);

  return (
    <div className="App">
      <Categories category={category} onSelect={onSelect} />
      {/* <NewsCategory category={category} onSelect={onSelect} /> */}
      {/* <NewsListData category={category} /> */}
      <NewsList category={category} />
      <SearchNews />
      {/* 뉴스 더미용 돌리기 - 페이지네이션만 누르자 */}
      {/* <NewsList2 category={category} /> */}
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
