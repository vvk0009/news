import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ThemeButton from "./components/ThemeButton";
import { WeatherProvider } from "./context/weather/WeatherContext";
import { NewsProvider } from "./context/news/NewsContext";

const App = () => {
  return (
    <NewsProvider>
      <Navbar />
      <WeatherProvider>
        <Home />
      </WeatherProvider>
      <ThemeButton />
    </NewsProvider>
  );
};

export default App;
