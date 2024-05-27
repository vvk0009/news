import React, { useContext } from "react";
import defaultImage from "../assets/default.jpg";
import ThemeContext from "../context/theme/ThemeContext";

const NewsCard = ({ news }) => {
  const { theme } = useContext(ThemeContext);

  const customStyle = {
    height: "300px",
    objectFit: "cover",
  };

  return (
    <div class={theme ? "card p-3 mb-3 bg-secondary" : "card p-3 mb-3"}>
      <div class="row g-0">
        <div class="col-md-4">
          <img
            style={customStyle}
            src={!news.urlToImage ? defaultImage : news?.urlToImage}
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{news?.title}</h5>
            <p class="card-text">{news?.description}</p>
            <p class="card-text">
              <small class="text-body-secondary">Source : {news?.author}</small>
            </p>
            <p class="card-text">
              <small class="text-body-secondary">{news?.publishedAt}</small>
            </p>
            <a
              className={
                theme
                  ? "btn btn-sm btn-dark float-end"
                  : "btn btn-sm btn-primary float-end"
              }
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
