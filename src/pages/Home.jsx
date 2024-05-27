import React, { useContext, useEffect } from "react";
import Slider from "../components/Slider";
import WeatherCard from "../components/WeatherCard";
import NewsCard from "../components/NewsCard";
import ThemeContext from "../context/theme/ThemeContext";
import NewsContext from "../context/news/NewsContext";
import { fetchNews } from "../context/news/NewsActions";
import Spinner from "../components/Spinner";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { allNews, dispatch } = useContext(NewsContext);

  useEffect(() => {
    const getNews = async (topic) => {
      const data = await fetchNews(topic);

      dispatch({
        type: "GET_NEWS",
        payload: data,
      });
    };

    getNews("Indore");
  }, []);

  if (!allNews) {
    return (
      <div
        className={
          theme
            ? "container-fluid p-5 bg-dark text-light"
            : "container-fluid p-5"
        }
      >
        <Spinner />
      </div>
    );
  }

  return (
    <div
      className={
        theme ? "container-fluid p-5 bg-dark text-light" : "container-fluid p-5"
      }
    >
      <Slider />
      <h1 className="text-center my-3">Latest News</h1>
      <div className="row my-3 g-3">
        <div className="col-md-4 col-sm-12">
          <WeatherCard />
        </div>
        <div className="col-md-8 col-sm-12">
          {allNews.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
