import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const name = useGlobalContext();

  return <div>Search {name}</div>;
};

export default Search;
