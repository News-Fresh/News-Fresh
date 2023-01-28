import "./App.css";
import ArticleGo from "./components/ArticleGo";
import ArticleIT from "./components/ArticleIT";
import ArticleMarket from "./components/ArticleMarket";
import Logo from "./components/Logo";
import Menubar from "./components/Menubar";
// import axios from "axios";
import { useCallback, useState } from "react";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./components/Pages/NewsPage";

function App() {
  // API를 넘겨받을 state 선언
  const [data, setData] = useState(null);
  // 기본 카테고리 state 선언
  const [category, setCategory] = useState("all");
  // 콜백으로 사용 할 카테고리 함수
  const onSelect = useCallback((Category) => setCategory(Category), []);

  return (
    <div className="App">
      <div>
        {/* JSON 문자열 뿌릴 영역 */}
        {data && (
          <textarea
            rows={7}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          />
        )}
      </div>
      {/* props로 카테고리 state와 함수를 넘겨줌 */}
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
      <Menubar />
      <Logo />
      <ArticleIT />
      <ArticleGo />
      <ArticleMarket />
      <Routes>
        <Route path="/:category?" component={NewsPage} />
      </Routes>
    </div>
  );
}

export default App;
