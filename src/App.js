import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import requests from "./api/Requests";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="-mt-[180px] z-30">
        <MovieList url={requests.popularTvShows} title="Popular TV Shows" />

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

export default App;
