import "./App.css";
import ArticleGo from "./components/ArticleGo";
import ArticleIT from "./components/ArticleIT";
import ArticleMarket from "./components/ArticleMarket";
import Logo from "./components/Logo";
import Menubar from "./components/Menubar";

function App() {
  return (
    <div className="App">
      <Menubar />
      <Logo />
      <ArticleIT />
      <ArticleGo />
      <ArticleMarket />
    </div>
  );
}

export default App;
