import { useReducer } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const initialState = {
    theme: true,
  };

  const ThemeReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_THEME":
        return {
          ...state,
          theme: state.theme ? false : true,
        };
    }
  };

  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ dispatch, ...state }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
