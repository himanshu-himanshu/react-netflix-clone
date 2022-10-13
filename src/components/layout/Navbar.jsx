import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { HiSearch } from "react-icons/hi";
import { GoBell } from "react-icons/go";

function Navbar() {
  const [show, setShow] = useState(false);

  const transitionBar = () => {
    if (window.scrollY > 10) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionBar);
    return () => window.removeEventListener("scroll", transitionBar);
  }, []);

  return (
    <div
      className={`fixed bg-${
        show ? "black" : "transparent"
      } top-0 right-0 left-0 flex flex-row justify-between px-6 md:px-8 lg:px-12 py-2 z-50 duration-150`}
    >
      <div className="flex flex-row p-2 space-x-10 items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
          className="h-6 lg:h-8"
        />
        <ul className="hidden lg:flex flex-row text-gray-100 text-sm space-x-6">
          <li>
            <a href="#" className="font-normal">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="font-light">
              TV Shows
            </a>
          </li>
          <li>
            <a href="#" className="font-light">
              Movies
            </a>
          </li>
          <li>
            <a href="#" className="font-light">
              New & Popular
            </a>
          </li>
          <li>
            <a href="#" className="font-light">
              My List
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row items-center space-x-6 text-gray-100">
        <HiSearch className="nav-icons" />
        <span className="font-extralight text-sm">Kids</span>
        <GoBell className="nav-icons" />
        <Link to="/profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            className="w-8 rounded"
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
