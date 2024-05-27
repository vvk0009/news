import React, { useContext, useState } from "react";
import ThemeContext from "../context/theme/ThemeContext";
import NewsContext from "../context/news/NewsContext";
import { fetchNews } from "../context/news/NewsActions";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { dispatch } = useContext(NewsContext);

  const [text, setText] = useState("");

  const getNews = async (topic) => {
    const data = await fetchNews(topic);

    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getNews(text);
    setTopic("");
  };

  return (
    <nav
      className={
        theme
          ? "navbar navbar-expand-lg bg-dark shadow"
          : "navbar navbar-expand-lg bg-light shadow"
      }
    >
      <div className="container-fluid">
        <a
          className={theme ? "navbar-brand text-light" : "navbar-brand"}
          href="/"
        >
          KAL-TAK-NEWS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={theme ? "nav-link text-light" : "nav-link"}
                aria-current="page"
                href="/Sports"
                onClick={() => getNews("Indian Sports")}
              >
                SPORTS
              </a>
            </li>
            <li className="nav-item">
              <a
                className={theme ? "nav-link text-light" : "nav-link"}
                href="/Politics"
                onClick={() => getNews("Indian Politics")}
              >
                POLITICS
              </a>
            </li>
            <li className="nav-item">
              <a
                className={theme ? "nav-link text-light" : "nav-link"}
                href="/entertainment"
                onClick={() => getNews("Bollywood")}
              >
                ENTERTAINMENT
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
