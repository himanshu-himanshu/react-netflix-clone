import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

import axios from "../api/axios";
import requests from "../api/Requests";

function MovieList({ title, url, wide, shadow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getBanner() {
      const request = await axios.get(url);
      const data = request.data.results;
      setMovies(data);
      return request;
    }
    getBanner();
  }, [url]);

  return (
    <div className="movies text-gray-100 px-10 py-4 my-4 relative">
      {shadow && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#0E0E0E] h-full w-1/12" />
      )}
      <h1 className="text-2xl py-4 mx-4 font-semibold">{title}</h1>
      <div className="movieList flex flex-row h-full ">
        {movies.map((movie) => (
          <img
            src={`${requests.fetchImage}${
              wide ? movie?.backdrop_path : movie?.poster_path
            }`}
            alt=""
            className="h-[200px] mx-4 rounded"
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
