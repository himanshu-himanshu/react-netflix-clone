import React from "react";

import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

function Banner() {
  return (
    <div
      className="h-[650px] bg-black text-gray-100 banner relative z-10"
      style={{
        backgroundImage: `url(https://images6.alphacoders.com/416/416156.jpg)`,
      }}
    >
      <div className="h-[200px] w-full absolute top-0 left-0 bg-gradient-to-b from-black" />
      <div className="px-12 py-2 flex items-center h-full">
        <div className="flex flex-col space-y-12 p-2">
          <div className="">
            <h1 className="font-bold text-6xl">Big Bang Theory</h1>
            <p className="max-w-xl text-xl mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              explicabo exercitationem deserunt iure quisquam. Nobis ipsam illo
              hic consequatur. Repudiandae cumque porro repellat voluptatum
              reiciendis aspernatur magnam a? Veritatis, porro?
            </p>
          </div>
          <div className="flex flex-row space-x-6 text-xl">
            <button className="bg-white text-black px-8 py-2 rounded flex flex-row items-center">
              <FaPlay className="h-6 w-6" />{" "}
              <span className="ml-2 font-semibold">Play</span>
            </button>
            <button className="bg-[#4F4E4E] px-8 py-2 rounded flex flex-row items-center">
              <AiOutlineInfoCircle className="h-8 w-8 text-gray-100" />{" "}
              <span className="ml-2">More Info</span>
            </button>
          </div>
        </div>
      </div>
      <div className="h-[150px] w-full absolute bottom-0 left-0 bg-gradient-to-t from-black" />
    </div>
  );
}

export default Banner;
