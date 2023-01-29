import "./App.css";
import ArticleGo from "./components/ArticleGo";
import ArticleIT from "./components/ArticleIT";
import ArticleMarket from "./components/ArticleMarket";
import Logo from "./components/Logo";
import Menubar from "./components/Menubar";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <Menubar />
      <Logo />
      <ArticleIT />
      <ArticleGo />
      <ArticleMarket />
      <Weather />
    </div>
  );
}

export default App;
