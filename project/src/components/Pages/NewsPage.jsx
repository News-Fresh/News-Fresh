import React from "react";
import Categories from "../Categories";
import NewsList from "../NewsList";
import { useParams } from "react-router-dom";

//useParams으로 링크의 URL 파라미터를 이용할 것임
// .../:category면 category가 URL의 파라미터임
const NewsPage = () => {
  // 카테고리가 선택되지 않았을 경우 기본값 'all'
  // match undefined 오류로 useParams hook 사용
  const parms = useParams();
  const category = parms.category || "all";

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
