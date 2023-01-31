import React, { useState } from "react";
import "../css/paging.css";
import Pagination from "react-js-pagination";

// const articles = { articles };
const Paging = ({ page, count, setPage }) => {
  return (
    <>
      {console.log(count)};
      <Pagination
        //현재 보고 있는 페이지
        activePage={page}
        //한 페이지에 출력할 아이템수
        itemsCountPerPage={1}
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
    </>
  );
};

export default Paging;

// import { useState } from "react";
// import Pagination from "react-js-pagination";
// import styled from "styled-components";

// const Paging = () => {
//   const [page, setPage] = useState(1);
//   const handlePageChange = (page) => {
//     setPage(page);
//   };

//   return (
//     <div>
//       <h2>API 연습</h2>
//       <PaginationBox>
//         <Pagination
//           activePage={1}
//           itemsCountPerPage={5}
//           totalItemsCount={300}
//           pageRangeDisplayed={5}
//           onChange={handlePageChange}
//         ></Pagination>
//       </PaginationBox>
//     </div>
//   );
// };

// const PaginationBox = styled.div`
//   .pagination {
//     display: flex;
//     justify-content: center;
//     margin-top: 15px;
//   }
//   ul {
//     list-style: none;
//     padding: 0;
//   }
//   ul.pagination li {
//     display: inline-block;
//     width: 30px;
//     height: 30px;
//     border: 1px solid #e2e2e2;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 1rem;
//   }
//   ul.pagination li:first-child {
//     border-radius: 5px 0 0 5px;
//   }
//   ul.pagination li:last-child {
//     border-radius: 0 5px 5px 0;
//   }
//   ul.pagination li a {
//     text-decoration: none;
//     color: #337ab7;
//     font-size: 1rem;
//   }
//   ul.pagination li.active a {
//     color: white;
//   }
//   ul.pagination li.active {
//     background-color: #337ab7;
//   }
//   ul.pagination li a:hover,
//   ul.pagination li a.active {
//     color: blue;
//   }
// `;

// export default Paging;
