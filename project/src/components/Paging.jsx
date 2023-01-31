import React, { useState } from "react";
import "../css/paging.css";
import Pagination from "react-js-pagination";

// const articles = { articles };
const Paging = ({ page, count, setPage }) => {
  return (
    <Pagination
      //현재 보고 있는 페이지
      activePage={page}
      //한 페이지에 출력할 아이템수
      itemsCountPerPage={2}
      //총 아이템 수
      totalItemsCount={count}
      //표시할 페이지 갯수
      pageRangeDisplayed={5}
      // 넘기는 버튼 추가
      prevPageText={"‹"}
      nextPageText={"›"}
      //함수
      onChange={setPage}
    />
  );
};

export default Paging;
