import React, { useContext } from "react";
import { FaRegSun, FaMoon } from "react-icons/fa";
import ThemeContext from "../context/theme/ThemeContext";
const ThemeButton = () => {
  const { theme, dispatch } = useContext(ThemeContext);

  const changeTheme = () => {
    dispatch({
      type: "CHANGE_THEME",
    });
  };

  return (
    <button
      className={
        theme ? "fab btn btn-warning text-light" : "fab btn btn-dark text-light"
      }
      onClick={changeTheme}
    >
      {theme ? <FaRegSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeButton;
