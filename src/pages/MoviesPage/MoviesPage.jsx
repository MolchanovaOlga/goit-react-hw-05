import { useEffect, useState } from 'react';

import css from './MoviePage.module.css'

import MoviesList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { requestMovieByQuery } from '../../components/services/api';

const MoviesPage = () => {
  const [searchQuery, setsearchQuery] = useState(null);
  const [searchMovies, setSearchMovies] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSetSearchQuery = query => {
    setSearchMovies([]);
    setsearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery === null) {
      return;
    }

    const fetchmovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await requestMovieByQuery(searchQuery);
        setSearchMovies(data);
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchmovies();
  }, [searchQuery]);

  return (
    <div className={css.container}>
      {error && <ErrorMessage />}
      <SearchBar onSearch={onSetSearchQuery} />
      {loading && <Loader />}
      <MoviesList moviesList={searchMovies} />
    </div>
  );
};

export default MoviesPage;
