import { useEffect, useState } from 'react';

import css from './HomePage.module.css';

import { requestTrendingMovies } from '../../components/services/api';
import MovieList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchmovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await requestTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchmovies();
  }, []);

  return (
    <div className={css.container}>
      {loading && <Loader />}
      <h1 className={css.title}>Trending Today</h1>
      {error && !trendingMovies && <ErrorMessage />}
      <MovieList trendingMovies={trendingMovies} />
    </div>
  );
};

export default HomePage;
