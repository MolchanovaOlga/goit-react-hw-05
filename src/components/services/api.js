import axios from 'axios';

const idAPI = '0ed9f187b4616957d65fb0552612573f';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWQ5ZjE4N2I0NjE2OTU3ZDY1ZmIwNTUyNjEyNTczZiIsInN1YiI6IjY1ZmIzZmJjNjA2MjBhMDE3YzI1YzllMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zIaxj-bsCj2STSLOXX8zPUlAsyUdnff_2k1_RhqcGYQ',
  },
};

export const requestTrendingMovies = async () => {
  //axios.defaults.baseURL = 'https://api.themoviedb.org/';
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );

  return response.data;
};
