import React, { useContext } from "react";
import ThemeContext from "../context/theme/ThemeContext";

const CryptoSlider = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <marquee
      scrollamount="20"
      className={
        theme ? "my-3 bg-dark text-light w-100" : "w-100 my-3 text-dark"
      }
    >
      <h3>BTC $56000</h3>
    </marquee>
  );
};

export default CryptoSlider;
