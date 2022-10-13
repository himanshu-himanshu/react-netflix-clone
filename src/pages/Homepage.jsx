import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";

import requests from "../api/Requests";

function Homepage() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="-mt-[200px] z-30">
        <MovieList
          url={requests.popularTvShows}
          title="Top TV Shows this week"
          top={true}
        />

        <MovieList
          url={requests.fetchTrending}
          title="Trending Now"
          shadow={true}
          wide={true}
        />
        <MovieList
          url={requests.fetchNetflix}
          shadow={true}
          title="Netflix Originals"
        />
        <MovieList
          url={requests.topTvShows}
          shadow={true}
          title="Bingeworthy TV Shows"
        />
        <MovieList
          url={requests.fetchSciFi}
          shadow={true}
          title="Sci-Fi &  Fantasy"
        />
        <MovieList url={requests.fetchComedy} shadow={true} title="Comedy" />
        <MovieList
          url={requests.fetchDocumentary}
          shadow={true}
          title="Documentary"
        />
        <MovieList
          url={requests.fetchMystery}
          shadow={true}
          title="Mysteries"
        />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
