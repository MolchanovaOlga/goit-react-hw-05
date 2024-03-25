import css from './MovieList.module.css';

import MoviesListItem from '../MovieListItem/MovieListItem';
import { Link } from 'react-router-dom';

const MoviesList = ({ trendingMovies }) => {
  return (
    <ul className={css.list}>
      {Array.isArray(trendingMovies) &&
        trendingMovies.length > 0 &&
        trendingMovies.map(item => {
          return (
            <li className={css.item} key={item.id}>
              <MoviesListItem item={item} />
              <Link to={`/movies/${item.id}`} className={css.link}>
                See more...
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MoviesList;
