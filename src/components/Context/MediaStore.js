import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export let ContextStore = createContext("");

function MediaStoreProvider(props) {
  const [trendingMovies, settrendingMovies] = useState([]);
  const [trendingtvshows, settrendingtvshows] = useState([]);
  const [trendingPeople, settrendingPeople] = useState([]);

  let gettrendingItems = async (mediaType, callback) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c636ed7787cc302d96bf88ccf334e0d8`
    );
    callback(data.results);
  };
  useEffect(() => {
    gettrendingItems("movie", settrendingMovies);
    gettrendingItems("tv", settrendingtvshows);
    gettrendingItems("person", settrendingPeople);
  }, []);
  return (
    <ContextStore.Provider
      value={{ trendingMovies, trendingPeople, trendingtvshows }}
    >
      {props.children}
    </ContextStore.Provider>
  );
}

export default MediaStoreProvider;
