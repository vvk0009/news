import { useReducer } from "react";
import { createContext } from "react";
import WeatherReducer from "./WeatherReducer";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const initialState = {
    weatherData: null,
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  return (
    <WeatherContext.Provider value={{ dispatch, ...state }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
