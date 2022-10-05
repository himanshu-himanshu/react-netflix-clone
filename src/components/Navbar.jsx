import React from "react";

import { HiSearch } from "react-icons/hi";
import { GoBell } from "react-icons/go";

function Navbar() {
  return (
    <div className="absolute top-0 right-0 left-0 flex flex-row justify-between px-6 md:px-8 lg:px-12 py-2 z-50">
      <div className="flex flex-row p-2 space-x-12 items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
          className="h-6 lg:h-8"
        />
        <ul className="hidden lg:flex flex-row text-gray-100 text-sm space-x-6">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">TV Shows</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">My List</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row items-center space-x-6 text-gray-100">
        <HiSearch className="text-gray-100 h-6 w-6" />
        <span>Kids</span>
        <GoBell className="text-gray-100 h-6 w-6" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
          className="w-8 rounded"
        />
      </div>
    </div>
  );
}

export default Navbar;
