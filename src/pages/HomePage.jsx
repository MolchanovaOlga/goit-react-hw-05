import { useEffect, useState } from 'react';

import css from './HomePage.module.css';

import { requestTrendingMovies } from '../components/services/api';
import MoviesGallery from '../components/MoviesGallery/MoviesGallery';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    const fetchmovies = async () => {
      try {
        const data = await requestTrendingMovies();
        console.log(data.results);
        setTrendingMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchmovies();
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending Today</h1>
      <MoviesGallery trendingMovies={trendingMovies} />
    </div>
  );
};

export default HomePage;