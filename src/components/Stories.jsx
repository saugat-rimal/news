import React, { useEffect } from "react";

const Stories = () => {
  let isLoading = true;

  let API = "https://hn.algolia.com/api/v1/search?query=react";

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
    fetchApi(API);
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return <div>Stories</div>;
};

export default Stories;
