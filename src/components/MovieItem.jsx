import React from "react";
import requests from "../api/Requests";

function MovieItem({ data }) {
  return (
    <div
      style={{
        backgroundImage: `url(${requests.fetchImage}${data.banner?.data.backdrop_path})`,
      }}
    ></div>
  );
}

export default MovieItem;
