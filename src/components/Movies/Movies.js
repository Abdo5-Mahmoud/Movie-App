import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styles from "./movies.module.scss";
import { Link } from "react-router-dom";
import { ContextStore } from "../Context/MediaStore";
function Movies({ itmeNUmbers }) {
  const { trendingMovies } = useContext(ContextStore);
  return (
    <div className="row my-5">
      <div className="col-md-4">
        <div>
          <div className={`${styles.bordery} w-25 mb-4`}></div>
          <h3>Trending </h3>
          <h3>Movies</h3>
          <h3>to Watch now</h3>
          <span className={`${styles.secondFont}`}>
            most watched movies by day
          </span>
          <div className={`${styles.bordery} w-100 mt-4`}></div>
        </div>
      </div>
      {trendingMovies.slice(0, itmeNUmbers).map((ele, index) => {
        return (
          <div key={index} className="col-md-2">
            <Link
              to={`/details/${ele.id}/${ele.media_type}`}
              className="nav-link"
            >
              <div className="item position-relative">
                <img
                  className="w-100"
                  src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`}
                ></img>
                <h2 className="text-center h6 ">{ele.title}</h2>
                <span
                  className={`badge bg-primary rounded-none fs-8 position-absolute ${styles.My_badge}`}
                >
                  {ele.vote_average.toFixed(2)}
                  {/* {Math.round(ele.vote_average)} */}
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
