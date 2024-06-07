import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Details() {
  let params = useParams();

  let [itemdetails, setitemdetails] = useState({});

  let getItemDetails = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${params.name}/${params.id}?api_key=c636ed7787cc302d96bf88ccf334e0d8`
    );
    setitemdetails(data);
    console.log(data);
  };

  useEffect(() => {
    getItemDetails();
  }, []);

  return (
    <div className="row py-5">
      <div className="col-md-3">
        {params.name !== "person" ? (
          <img
            className="w-100 rounded-5"
            src={"https://image.tmdb.org/t/p/w500" + itemdetails.poster_path}
            alt=""
          />
        ) : (
          <img
            className="w-100 h-100 rounded-5"
            src={"https://image.tmdb.org/t/p/w500" + itemdetails.profile_path}
            alt=""
          />
        )}
      </div>
      <div className="col-md-9 my-3">
        <h2>
          {itemdetails.title}
          {itemdetails.name}
        </h2>
        <p className="text-secondary my-3">
          {itemdetails.overview}
          {itemdetails.biography}
        </p>
      </div>
    </div>
  );
}

export default Details;
