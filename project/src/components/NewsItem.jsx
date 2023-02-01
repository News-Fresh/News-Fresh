import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;
  /* position: fixed; */
  font-family: "Nanum Myeongjo";
  text-align: center;
  margin-top: 2rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
  max-width: 90%;
  overflow: hidden;
  max-height: 70%;
  /* min-height: 55%; */
  .thumbnail {
    img {
      margin-right: 1rem;
      width: 7rem;
      height: 6rem;
      object-fit: cover;
      border-radius: 6%;
    }
  }
  .contents {
    h2 {
      margin: 0;
      font-size: 1rem;
      font-weight: 850;
      a {
        /* color: block; */
        color: #47661f;
      }
      a:hover {
        color: #79984e;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      font-size: 1rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 1rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
