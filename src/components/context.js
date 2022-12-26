import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

let API = "https://hn.algolia.com/api/v1/search?";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    query: " react",
    nbPages: 0,
    page: 0,
    hits: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApi = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      // isLoading = false;

      // console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi(`{API} query={state.query}&page={state.page} `);
  }, []);

  return <AppContext.Provider value={"saugat"}>{children}</AppContext.Provider>;
};

// custom hook creation

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
