const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchNetflix: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchImage: `https://image.tmdb.org/t/p/original/`,
  fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchSciFi: `discover/movie?api_key=5cff1a3bc156e0c3f8d8fc6c377090e8&language=en-US&with_genres=878`,
  fetchComedy: `discover/movie?api_key=5cff1a3bc156e0c3f8d8fc6c377090e8&language=en-US&with_genres=35`,
  fetchDocumentary: `discover/movie?api_key=5cff1a3bc156e0c3f8d8fc6c377090e8&language=en-US&with_genres=99`,
  fetchMystery: `discover/movie?api_key=5cff1a3bc156e0c3f8d8fc6c377090e8&language=en-US&with_genres=9648`,
  popularTvShows: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`,
  topTvShows: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
