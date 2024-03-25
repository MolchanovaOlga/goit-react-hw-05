import axios from 'axios';

//const idAPI = '0ed9f187b4616957d65fb0552612573f';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWQ5ZjE4N2I0NjE2OTU3ZDY1ZmIwNTUyNjEyNTczZiIsInN1YiI6IjY1ZmIzZmJjNjA2MjBhMDE3YzI1YzllMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zIaxj-bsCj2STSLOXX8zPUlAsyUdnff_2k1_RhqcGYQ',
  },
};

export const requestTrendingMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );
  return response.data;
};

export const requestMovieById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return response.data;
};

export const requestCastById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );
  return response.data.cast;
};

export const requestReviewsById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    options
  );
  return response.data.results;
};

export const requestMovieByQuery = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US`,
    options
  );
  return response.data.results;
};
