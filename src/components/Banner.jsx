import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

import axios from "../api/axios";
import requests from "../api/Requests";

function Banner() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    async function getBanner() {
      const request = await axios.get(requests.fetchNetflix);
      const data = request.data.results;
      setBanner(data[Math.floor(Math.random() * data.length - 1)]);

      return request;
    }
    getBanner();
  }, []);

  return (
    <div
      className="h-screen bg-black text-gray-100 banner relative -z-10"
      style={{
        backgroundImage: `url(${requests.fetchImage}${banner?.backdrop_path})`,
      }}
    >
      <div className="banner_shadow h-[200px] top-0 left-0 bg-gradient-to-b from-[#0E0E0E]" />
      <div className="px-12 py-2 flex items-center h-full">
        <div className="flex flex-col space-y-12 p-2">
          <div className="">
            <h1 className="font-bold text-6xl max-w-lg">{banner.name}</h1>
            <p className="max-w-xl text-lg mt-4">{banner.overview}</p>
          </div>
          <div className="flex flex-row space-x-6 text-xl">
            <button className="bg-white text-black banner_btn">
              <FaPlay className="h-6 w-6" />
              <span className="ml-2 font-semibold">Play</span>
            </button>
            <button className="bg-[#4F4E4E] banner_btn">
              <AiOutlineInfoCircle className="h-8 w-8 text-gray-100" />
              <span className="ml-2">More Info</span>
            </button>
          </div>
        </div>
      </div>
      <div className="banner_shadow h-[300px] bottom-0 left-0 bg-gradient-to-t from-[#0E0E0E]" />
    </div>
  );
}

export default Banner;
