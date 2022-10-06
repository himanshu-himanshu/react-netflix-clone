const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchNetflix: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchImage: `https://image.tmdb.org/t/p/original/`,
};

export default requests;
