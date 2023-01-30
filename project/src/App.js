import "./App.css";
import ArticleGo from "./components/ArticleGo";
import ArticleIT from "./components/ArticleIT";
import ArticleMarket from "./components/ArticleMarket";
import Logo from "./components/Logo";
import Menubar from "./components/Menubar";
// import axios from "axios";

import { Route, Routes } from "react-router-dom";
import NewsPage from "./Pages/NewsPage";
import MainNews from "./components/MainNews";
import Weather from "./components/Weather";
import WeatherForcast from "./components/WeatherForcast";

function App() {
  // API를 넘겨받을 state 선언
  // const [data, setData] = useState(null);
  // 기본 카테고리 state 선언
  // const [category, setCategory] = useState('all');
  // // 콜백으로 사용 할 카테고리 함수
  // const onSelect = useCallback((Category) => setCategory(Category), []);

  //날씨API
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=4281729cba61323b40e791c6036334ed`

  return (
    <div className="App">
      {/* props로 카테고리 state와 함수를 넘겨줌 */}
      {/* <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} /> */}
      {/* <MainNews /> */}
      <Menubar />
      <Logo />
      <ArticleIT />
      <ArticleGo />
      <ArticleMarket />
      <Weather />
      <Routes>
        <Route path="/:category?" component={NewsPage} />
      </Routes>
    </div>
  );
}

export default App;
